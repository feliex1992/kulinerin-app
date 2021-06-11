import { LitElement, html, css } from 'lit-element';
import Swal from 'sweetalert2';

import RestaurantDbSource from '../../data/restaurantdb-source';

class DetailReviewSubmite extends LitElement {
  constructor() {
    super();
    this._idRestaurant = this.getAttribute('idRestaurant') || '-';
    this.render();
  }

  static get styles() {
    return css`
      .form-wrapper {
        width: 100%;
        margin-right: 10px;
      }

      form {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px;
        padding: 10px;
      }
      
      form:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      }

      input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      #inputReview {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      input[type=submit]:hover {
        background-color: #45a049;
      }
      
      input[type=reset] {
        display: none;
      }
    `;
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
            <input type="text" id="inputReviewName" name="inputReviewName" placeholder="Nama Pengulas" required>
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
}

customElements.define('detail-review-submite', DetailReviewSubmite);
