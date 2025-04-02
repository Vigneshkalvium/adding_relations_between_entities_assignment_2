import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 text-lg font-bold">⭐ {product.avgRating} ({product.totalRatings} reviews)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;