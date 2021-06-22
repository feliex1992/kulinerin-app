import Swal from 'sweetalert2';

import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

class LikeButton extends HTMLElement {
  async connectedCallback() {
    this._restaurant = this.getAttribute('restaurant');
    this._idRestaurant = this.getAttribute('idRestaurant');
    this._statusLike = await this._isRestaurantExists(this._idRestaurant);
    await this.render();
    this._initLikeButton();
  }

  _initLikeButton() {
    const buttonLike = document.getElementById('likeButton');
    buttonLike.addEventListener('click', async () => {
      try {
        if (this._statusLike) {
          this._removeFromFavorite();
        } else {
          this._addToFavorite();
        }
        this._statusLike = await this._isRestaurantExists(this._idRestaurant);
        buttonLike.classList.toggle('like');
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text: 'Restaurant gagal di tambahkan ke daftar favorite!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  async _addToFavorite() {
    await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
    Swal.fire({
      icon: 'success',
      title: 'Simpan.',
      text: 'Restaurant berhasil di tambahkan ke daftar favorite.',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  async _removeFromFavorite() {
    await FavoriteRestaurantIdb.deleteRestaurant(this._idRestaurant);
    Swal.fire({
      icon: 'success',
      title: 'Hapus.',
      text: 'Restaurant berhasil di hapus dari daftar favorite.',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  async _isRestaurantExists(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  }

  async render() {
    const statusLike = this._statusLike;

    this.innerHTML = `
      <div id="likeButtonContainer">
        <button 
          aria-label="like this restaurant" 
          id="likeButton"
          ${(statusLike ? 'class="like"' : '')}
        >
          <i class="fas fa-heart fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    `;
  }
}

customElements.define('like-button', LikeButton);
