// ProductPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRating from './StarRating';

const ProductPage = ({ products }) => {
  // Получаем параметры маршрута
  const { id } = useParams();

  // Находим товар по id
  const product = products.find(product => product.id === parseInt(id));

  // Проверяем, загружены ли товары
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} /> {/* Добавляем отображение изображения */}
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <StarRating rating={Math.round(product.rating.rate)} />
      <Link to="/products">Back</Link>
    </div>
  );
};

export default ProductPage;


