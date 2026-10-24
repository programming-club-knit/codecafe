// Shopping cart for the menu page.

const cart = []; // [{ id, name, price, qty }]

const cartEls = {
  drawer: document.getElementById('cart-drawer'),
  openBtn: document.getElementById('cart-open'),
  closeBtn: document.getElementById('cart-close'),
  list: document.getElementById('cart-items'),
  count: document.getElementById('cart-count'),
  total: document.getElementById('cart-total')
};

function addToCart(id) {
  const item = MENU.find(i => i.id === id);
  const line = cart.find(c => c.id === id);
  if (line) {
    line.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: 1 });
  }
  renderCart();
}

function changeQty(id, delta) {
  const line = cart.find(c => c.id === id);
  line.qty += delta;
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, line) => sum + line.price, 0);
}

function renderCart() {
  cartEls.list.innerHTML = cart.map(line => `
    <li>
      <span>${line.name} <small>($${line.price})</small></span>
      <span class="qty">
        <button data-action="dec" data-id="${line.id}" aria-label="Decrease quantity">-</button>
        ${line.qty}
        <button data-action="inc" data-id="${line.id}" aria-label="Increase quantity">+</button>
      </span>
    </li>`).join('');

  cartEls.count.textContent = cart.reduce((n, line) => n + line.qty, 0);
  cartEls.total.textContent = cartTotal();
}

cartEls.list.addEventListener('click', e => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  changeQty(Number(btn.dataset.id), btn.dataset.action === 'inc' ? 1 : -1);
});

cartEls.openBtn.addEventListener('click', () => cartEls.drawer.classList.add('open'));
cartEls.closeBtn.addEventListener('click', () => cartEls.drawer.classList.remove('open'));

renderCart();
