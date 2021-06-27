import { SKELETON_DETAIL_MENU } from '../../../templates/theme';

class DetailMenu extends HTMLElement {
  connectedCallback() {
    this._statLoading = this.getAttribute('statLoading') || 'false';
    this._menus = this.getAttribute('menus') || '{}';
    this.render();
  }

  render() {
    const statLoading = this._statLoading;
    const menus = JSON.parse(this._menus);

    let foodMenus = '';
    let drinkMenus = '';

    if (statLoading === 'true') {
      this.innerHTML = SKELETON_DETAIL_MENU;
    } else {
      menus.foods.forEach((food) => {
        foodMenus += `<li><detail-menu-list menu="${food.name}" aria-label="${food.name}"></detail-menu-list></li>`;
      });

      menus.drinks.forEach((drink) => {
        drinkMenus += `<li><detail-menu-list menu="${drink.name}" aria-label="${drink.name}"></detail-menu-list></li>`;
      });

      this.innerHTML = `
        <div class="detail-menu">
          <div class="container" tabindex="0">
            <h2 class="title__content menu__title">Daftar Menu</h2>
            <div class="detail-menu__list">
              <div class="list__group card">
                <h3 class="list__title">Makanan</h3>
                <ul class="list__head">
                  ${foodMenus}
                </ul>
              </div>
              <div class="list__group card">
                <h3 class="list__title">Minuman</h3>
                <ul class="list__head">
                  ${drinkMenus}
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
}

customElements.define('detail-menu', DetailMenu);
