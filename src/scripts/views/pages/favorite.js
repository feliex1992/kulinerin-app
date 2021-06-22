const Favorite = {
  async render() {
    return `
    <div class="container favorite-wrapper">
      <list-restaurant titleList="Restoran Favorite" loaderPage="favorite"></list-restaurant>
    </div>
    `;
  },

  async afterRender() {
    console.log('Ok ini');
  },
};

export default Favorite;
