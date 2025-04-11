import React, { useState } from 'react';
import Home from './Home';
import Product from './Product';
import UsersList from './UsersList';

function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'product':
        return <Product />;
      case 'userslist':
        return <UsersList />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
