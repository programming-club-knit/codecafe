# Creates the HackTheWeb labels and one GitHub issue per file in ../issues.
# Requires the GitHub CLI (https://cli.github.com) and `gh auth login`.
# Usage:  ./scripts/create-issues.ps1 -Repo your-org/hack-the-web
param([string]$Repo = '')

$ErrorActionPreference = 'Stop'
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) { throw 'Install the GitHub CLI first: https://cli.github.com' }

$repoArgs = @()
if ($Repo) { $repoArgs = @('--repo', $Repo) }

$labels = @(
  @('hacktheweb', '1d76db'), @('difficulty: easy', '0e8a16'), @('difficulty: medium', 'fbca04'), @('difficulty: hard', 'd93f0b'),
  @('bug', 'd73a4a'), @('enhancement', 'a2eeef'), @('security', 'b60205'), @('accessibility', '5319e7'),
  @('html', 'e34c26'), @('css', '563d7c'), @('javascript', 'f1e05a'),
  @('points: 10', 'ededed'), @('points: 30', 'ededed'), @('points: 50', 'ededed')
)
foreach ($l in $labels) {
  gh label create $l[0] --color $l[1] --force @repoArgs | Out-Null
}

$utf8 = New-Object System.Text.UTF8Encoding $false
Get-ChildItem (Join-Path $PSScriptRoot '..\issues') -Filter *.md | Sort-Object Name | ForEach-Object {
  $raw = Get-Content $_.FullName -Raw
  if ($raw -notmatch '(?s)^---\r?\ntitle:\s*"(.+?)"\r?\nlabels:\s*(.+?)\r?\n---\r?\n(.*)$') {
    Write-Warning "Skipping $($_.Name): bad front matter"
    return
  }
  $title = $Matches[1]; $issueLabels = $Matches[2].Trim(); $body = $Matches[3]
  $tmp = New-TemporaryFile
  [System.IO.File]::WriteAllText($tmp.FullName, $body, $utf8)
  gh issue create --title $title --label $issueLabels --body-file $tmp.FullName @repoArgs
  Remove-Item $tmp.FullName
}
Write-Host 'Done.'
