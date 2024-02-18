// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default NotFoundPage;
