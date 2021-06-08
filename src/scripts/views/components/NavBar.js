class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header__fixed">
        <nav class="navbar">
          <div class="container">
            <a href="#/" class="nav__title btn__size">KulinerIn.</a>

            <button id="hamburgerButton" class="hamburger btn__size" aria-label="toggle menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </button>

            <ul id="navigationDrawer" class="nav__list btn__size">
              <li class="nav__item"><a class="nav__link" href="#/home">Home</a></li>
              <li class="nav__item"><a class="nav__link" href="#/favorite">Favorite</a></li>
              <li class="nav__item"><a class="nav__link" href="https://www.linkedin.com/in/jafar-pahrudin-5b03057a/">About Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar);
