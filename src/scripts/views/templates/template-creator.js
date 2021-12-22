import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="post-item">
        <img class="post-item_thumbnail" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" />
        <div class="post-item_detail">
            <div class="detail-content">
                <h1 class="detail-title">${restaurant.name}</h1>
                <div class="detail-category-container">
                    ${restaurant.categories.map((category) => `<span class="detail-category">${category.name}</span>`).join(', ')}
                </div>
                <span class="detail-location">${restaurant.address}, ${restaurant.city}</span>
                <p class="detail-description">${restaurant.description}</p> 
            </div>
            <div class="detail-menu">
                <div class="menu-title-container">
                    <h2 class="menu-title">Foods :</h2>
                </div>
                <ul class="menu-list">
                    ${restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}
                <ul>
            </div>
            <div class="detail-menu">
                <div class="menu-title-container">
                    <h2 class="menu-title">Drinks :</h2>
                </div>
                <ul class="menu-list">
                    ${restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}
                </ul>
            </div>
            <div class="menu-rating">
                <span>Rating : ${restaurant.rating}</span>   
            </div>
            <h2>Customer Review</h2>
            <div id="review-container">
                ${restaurant.customerReviews.slice(0, 3).map((review) => `
                    <div class="review-container">
                        <div class="review-body">
                            <h3 class="review-consumer-name">${review.name}</h3>
                            <small class="review-date-post">${review.date}</small>
                            <p class="review-content">${review.review}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="post-item">
        <img class="post-item_thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="city">${restaurant.city}</div>
        <div class="post-item_content">
            <p class="post-item_rating">Rating : ${restaurant.rating}</p>
            <div class="post-item_title">
                <h1><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
            </div>
            <p class="post-item_description">${restaurant.description}</p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
