// Menu page: loading, filtering and searching.

const grid = document.getElementById('menu-grid');
const statusEl = document.getElementById('status');
const filters = document.getElementById('filters');
const searchInfo = document.getElementById('search-info');
const searchInput = document.getElementById('search');

// Pretend network call: slow for drinks, random for everything else.
function fetchMenu(category) {
  return new Promise(resolve => {
    const delay = category === 'drinks' ? 1200 : 150 + Math.random() * 500;
    setTimeout(() => {
      resolve(category === 'all' ? MENU : MENU.filter(i => i.category === category));
    }, delay);
  });
}

function renderMenu(items) {
  if (!items.length) {
    grid.innerHTML = '<p class="empty">Nothing here yet. Check back soon!</p>';
    return;
  }
  grid.innerHTML = items.map(i => `
    <article class="card">
      <div class="emoji">${i.emoji}</div>
      <h3>${i.name}</h3>
      <p>${i.desc}</p>
      <div class="card-foot">
        <span class="price">$${i.price}</span>
        <button class="btn add-btn" data-id="${i.id}">Add</button>
      </div>
    </article>`).join('');
}

async function loadCategory(category) {
  statusEl.textContent = 'Brewing...';
  const items = await fetchMenu(category);
  renderMenu(items);
  statusEl.textContent = '';
}

filters.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  filters.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  loadCategory(chip.dataset.category);
});

grid.addEventListener('click', e => {
  const btn = e.target.closest('.add-btn');
  if (btn) addToCart(Number(btn.dataset.id));
});

// Search: /menu.html?q=latte
const query = new URLSearchParams(location.search).get('q');
if (query) {
  searchInput.value = query;
  searchInfo.innerHTML = 'Showing results for <strong>' + query + '</strong>';
  const needle = query.toLowerCase();
  renderMenu(MENU.filter(i => i.name.toLowerCase().includes(needle)));
} else {
  loadCategory('all');
}
