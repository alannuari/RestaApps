const assert = require('assert');

Feature('Restoran Favorite');

Scenario('Menyukai salah satu restoran', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.post-item_title a');

  const firstRestaurant = locate('.post-item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');

  const likedRestaurantTitle = await I.grabTextFrom('.post-item_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Batal menyukkai restoran', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.post-item_title a');

  const firstRestaurant = locate('.post-item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');

  const likedRestaurantTitle = await I.grabTextFrom('.post-item_title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.amOnPage('/#/like');

  I.seeElement('.post-item_title a');

  const firstFavoriteRestaurant = locate('.post-item_title a').first();
  I.click(firstFavoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
});
