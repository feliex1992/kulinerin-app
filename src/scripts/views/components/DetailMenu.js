class DetailMenu extends HTMLElement {
  connectedCallback() {
    this._menus = this.getAttribute('menus') || '-';
    this.render();
  }

  render() {
    const menus = JSON.parse(this._menus);
    let foodMenus = '';
    let drinkMenus = '';

    menus.foods.forEach((food) => {
      foodMenus += `<li>${food.name}</li>`;
    });
    menus.drinks.forEach((drink) => {
      drinkMenus += `<li>${drink.name}</li>`;
    });
    this.innerHTML = `
      <div class="detail-menu">
        <div class="container">
          <h2 class="title__content menu__title">Daftar Menu</h1>
          <div class="description__content">
            <p>Makanan</p>
            <ul>
              ${foodMenus}
            </ul>
            <p>Minuman</p>
            <ul>
              ${drinkMenus}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-menu', DetailMenu);
