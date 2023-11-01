let itemsContainerElement = document.querySelector('.items-container');

let innerHtml ='';
items.forEach((items) => {
   innerHtml += `
   <div class="item-container">
      <img class="item-image" src=${items.image} alt="item-image">
      <div class="rating">
         ${items.rating.stars} ⭐ | ${items.rating.count}
      </div>
      <div class="company-name">${items.company}</div>
      <div class="item-name">${items.item_name}</div>
      <div class="price">
         <span class="current-price">Rs ${items.current_price}</span>
         <span class="original-price">Rs ${items.original_price}</span>
         <span class="discount">(${items.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag">Add to Bag</button>
   </div>`;
});
itemsContainerElement.innerHTML = innerHtml;