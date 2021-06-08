class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div tabindex="0" class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Jelajah Kuliner Indonesia.</h1>
          <p class="hero__tagline">Lihat lebih banyak pilihan tempat makan di sekitar anda, jangan sampai terlewatkan kesempatan untuk mendapatkan pengalaman yang berharga.</p>
        </div>
      </div>    
    `;
  }
}

customElements.define('hero-element', HeroElement);
