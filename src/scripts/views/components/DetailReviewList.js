class DetailReviewList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="detail-review-list card">
        <review-list-item
          nama="test nama"
          review="ok ini adalah test review bagus apa engganya ya"
        ></review-list-item>
      </div>
    `;
  }
}

customElements.define('detail-review-list', DetailReviewList);
