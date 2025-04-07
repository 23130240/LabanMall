fetch('https://compassup.com/api/1/sourcing/products/search/recommend')
  .then((response) => response.json())
  .then((data) => console.log(data))