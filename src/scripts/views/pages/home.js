const Home = {
  async render() {
    return `
      <hero-element></hero-element>

      <section id="content"></section>

      <aside></aside>
    `;
  },

  async afterRender() {
    const contentElement = document.querySelector('#content');
    const asideElement = document.querySelector('aside');

    contentElement.innerHTML += `
      <list-blog></list-blog>

      <div class="container">
        <list-restaurant></list-restaurant>
      </div>
    `;
    asideElement.innerHTML += `
      <map-component></map-component>
    `;
    window.initMap();
  },
};

export default Home;
