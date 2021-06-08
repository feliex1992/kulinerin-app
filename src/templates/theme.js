const SKELETON_BLOG_ITEM = (rightItem) => `
  <div tabindex="0" class="posts-blog__item">
    <div class="blog-image-wrapper">
      <div class="skeleton-box blog-image${rightItem}"></div>
    </div>
    <div class="blog-content">
      <div class="blog-content__text${rightItem} card">
        <p><div class="skeleton-box blog-content__post-date"></div></p>
        <div class="skeleton-box blog-content__post-title"></div>
        <p><div class="skeleton-box blog-text__paragraf"></div></p>
      </div>
    </div>
  </div>
`;

const SKELETON_RESTAURANT_ITEM = `
  <div class="restaurant-item card">
    <div class="skeleton-box restaurant-item__thumbnail"></div>
    <div class="restaurant-item__content">
      <p class="skeleton-box restaurant-item__title"></p>
      <p class="skeleton-box restaurant-item__city"></p>
      <p class="skeleton-box rating-wrapper"></p>
      
      <p class="skeleton-box restaurant-item__description"></p>
    </div>
  </div>
`;

module.exports = { SKELETON_BLOG_ITEM, SKELETON_RESTAURANT_ITEM };
