import React from 'react';

function Home({ setPage }) {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setPage('product')}>Go to Product</button>
      <button onClick={() => setPage('userslist')}>Go to Users List</button>
    </div>
  );
}

export default Home;
