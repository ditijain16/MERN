import React from 'react';

const Product = () => {
  fetch('https://api.restful-api.dev/objects')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
      }
    })
    .catch((error) => console.error('Error fetching data:', error));

  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default Product;
