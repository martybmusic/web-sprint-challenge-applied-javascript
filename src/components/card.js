import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const myCard = document.createElement('div');
  const myHeadline = document.createElement('div');
  const myAuthor = document.createElement('div');
  const myCntnr = document.createElement('div');
  const myImg = document.createElement('img');
  const myName = document.createElement('span');

  myCard.classList.add('card');
  myHeadline.classList.add('headline');
  myAuthor.classList.add('author');
  myCntnr.classList.add('img-container');

  myCard.appendChild(myHeadline);
  myCard.appendChild(myAuthor);
  myAuthor.appendChild(myCntnr);
  myCntnr.appendChild(myImg);
  myAuthor.appendChild(myName);

  myImg.src = article.authorPhoto;

  myHeadline.textContent = article.headline;
  myName.textContent = article.authorName;

  myCard.addEventListener('click', () => console.log(article.headline));

  return myCard

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
