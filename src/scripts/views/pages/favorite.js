const Favorite = {
  async render() {
    return `
      <h1>Ini favorite page.</h1>
      <h1>Ini favorite page.</h1>
      <h1>Ini favorite page.</h1>
      <h1>Ini favorite page.</h1>
      <h1>Ini favorite page.</h1>
    `;
  },

  async afterRender() {
    console.log('Ok ini');
  },
};

export default Favorite;
