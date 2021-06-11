class DetailMenu extends HTMLElement {
  connectedCallback() {
    this._menus = this.getAttribute('menus') || '{}';
    this.render();
  }

  render() {
    const menus = JSON.parse(this._menus);
    let foodMenus = '';
    let drinkMenus = '';

    menus.foods.forEach((food) => {
      foodMenus += `<detail-menu-list menu="${food.name}"></detail-menu-list>`;
    });

    menus.drinks.forEach((drink) => {
      drinkMenus += `<detail-menu-list menu="${drink.name}"></detail-menu-list>`;
    });

    this.innerHTML = `
      <div class="detail-menu">
        <div class="container">
          <h2 class="title__content menu__title">Daftar Menu</h1>
          <div class="detail-menu__list">
            <div class="list__group card">
              <h3 class="list__title">Makanan</h3>
              <ol class="list__head">
                ${foodMenus}
              </ol>
            </div>
            <div class="list__group card">
              <h3 class="list__title">Minuman</h3>
              <ol class="list__head">
                ${drinkMenus}
              </ol>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('detail-menu', DetailMenu);
