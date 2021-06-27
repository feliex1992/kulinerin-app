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

const SKELETON_DETAIL_RESTAURANT = `
  <div class="container">
    <h1 class="title__content title-detail"><span class="skeleton-box skeleton-box__title"></span></h1>
  </div>
  <detail-item statLoading="true"></detail-item>
  <detail-description statLoading="true"></detail-description>
  <detail-menu statLoading="true"></detail-menu>
  <detail-review statLoading="true"></detail-review>
`;

const SKELETON_DETAIL_ITEM = `
  <div tabindex="0" class="detail-item container">
    <div class="skeleton-box detail-item__image-wrapper"></div>

    <div class="skeleton-box detail-item__info-detail card">
  </div>
`;

const SKELETON_DETAIL_DESCRIPTION = `
<div class="detail-description">
  <div class="container">
    <h2 class="title__content description__title"><span class="skeleton-box skeleton-box__title"></span></h2>
    <div class="description__content">
      <p><div class="skeleton-box skeleton-box__description"></div></p>
    </div>
  </div>
</div>
`;

const SKELETON_DETAIL_MENU = `
  <div class="detail-menu">
    <div class="container">
      <h2 class="title__content menu__title"><span class="skeleton-box skeleton-box__title"></span></h2>
      <div class="detail-menu__list">
        <div class="list__group card">
          <h3 class="list__title"><span class="skeleton-box skeleton-box__title"></span></h3>
          <div class="skeleton-box skeleton-box__description"></div>
        </div>
        <div class="list__group card">
          <h3 class="list__title"><span class="skeleton-box skeleton-box__title"></span></h3>
          <div class="skeleton-box skeleton-box__description"></div>
        </div>
      </div>
    </div>
  </div>
`;

const SKELETON_DETAIL_REVIEW = `
  <div class="detail-review">
    <div class="containter">
      <h2 class="title__content review__title"><span class="skeleton-box skeleton-box__title"></span></h2>
      <div class="detail-review__content">
        <div class="detail-review__wrapper">
          <div class="skeleton-box skeleton-box__description"></div>
          <div class="skeleton-box skeleton-box__description"></div>
          <div class="skeleton-box skeleton-box__description"></div>
          <div class="skeleton-box skeleton-box__description"></div>
        </div>
      </div>
    </div>
  </div>
`;

const ERROR_CONNECTION = `
  <div class="error-content">
    <div class="image-wrapper">
      <lottie-player 
        src="images/connection-lost.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop autoplay
      ></lottie-player>
    </div>
    <div class="content-wrapper">
      <h2>No connection</h2>
      <p>Please check your internet connection <br>and try again.</p>
    </div>
  </div>
`;

module.exports = {
  ERROR_CONNECTION,
  SKELETON_BLOG_ITEM,
  SKELETON_RESTAURANT_ITEM,
  SKELETON_DETAIL_RESTAURANT,
  SKELETON_DETAIL_ITEM,
  SKELETON_DETAIL_DESCRIPTION,
  SKELETON_DETAIL_MENU,
  SKELETON_DETAIL_REVIEW,
};
