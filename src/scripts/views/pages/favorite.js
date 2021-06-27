const Favorite = {
  async render() {
    return `
      <div class="container favorite-wrapper"></div>
    `;
  },

  async afterRender() {
    const wrapperElement = document.querySelector('.favorite-wrapper');

    wrapperElement.innerHTML = `
      <list-restaurant titleList="Restoran Favorite" loaderPage="favorite"></list-restaurant>
    `;
  },
};

export default Favorite;
