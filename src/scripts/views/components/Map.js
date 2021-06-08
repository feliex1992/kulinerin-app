class Map extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="map-wrapper">
        <div class="container">
          <h2 tabindex="0" class="title__content">Temukan di Map</h2>
          <div id="map"></div>
        </div>
      </div>
    `;
  }
}

customElements.define('map-component', Map);
