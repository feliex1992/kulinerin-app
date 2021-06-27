import { LitElement, html } from 'lit-element';
import Swal from 'sweetalert2';

import RestaurantDbSource from '../../data/restaurantdb-source';

class DetailReviewSubmite extends LitElement {
  constructor() {
    super();
    this._idRestaurant = this.getAttribute('idRestaurant') || '-';
    this.render();
  }

  async submiteForm(e) {
    e.preventDefault();

    const idRestaurant = this._idRestaurant;

    const inputs = e.target.elements;
    const { value: inputReviewName } = inputs.inputReviewName;
    const { value: inputReview } = inputs.inputReview;

    try {
      const result = await RestaurantDbSource.postCustomerReview(
        idRestaurant,
        inputReviewName,
        inputReview,
      );

      console.log(result);
      const detailReview = document.querySelector('detail-review');
      detailReview.setCustomerReviews(JSON.stringify(result.customerReviews));

      Swal.fire({
        icon: 'success',
        title: 'Berhasil.',
        text: 'Ulasan berhasil di kirim.',
        confirmButtonText: 'OK',
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Gagal kirim!',
        text: 'Cek koneksi internet anda!',
        confirmButtonText: 'OK',
      });
    }
  }

  render() {
    return html`
      <div class="form-wrapper">
        <form @submit=${this.submiteForm} autocomplete="off">
          <div>
            <label for="inputReviewName">Nama</label>
            <input type="text" id="inputReviewName" name="inputReviewName" placeholder="Nama Pengulas" required aria-selected="true">
          </div>

          <div>
            <label for="inputReview">Ulasan</label>
            <textarea type="text" id="inputReview" name="inputReview" rows="3" placeholder="Ulasan" required></textarea>
          </div>

          <div>
            <input type="submit" value="Kirim">
            <input type="reset" value="reset" id="reset">
          </div>
        </form>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('detail-review-submite', DetailReviewSubmite);
