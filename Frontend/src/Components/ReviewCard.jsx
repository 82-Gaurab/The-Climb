/* eslint-disable react/prop-types */

import { Star } from "lucide-react";

export default function ReviewCard({ review }) {
  return (
    <div
      className="review-card max-w-md mx-auto m-3 min-w-[300px] w-[500px] overflow-hidden rounded-3xl font-[font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif]"
      style={{
        boxShadow: "0 0  30px #bebebe,-15px -15px 30px #ffffff",
      }}
    >
      <div
        className="bg-white overflow-hidden shadow-lg"
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
        }}
      >
        <div className="w-fit">
          <img className="h-[100px]" src={review.profile} alt={review.name} />
        </div>
        <h3 className="text-xl mb-4 mt-2 font-semibold text-[#172b53]">
          {review.name}
        </h3>
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < review.rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-gray-300 fill-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-600 mb-4">{review.comment}</p>
      </div>
    </div>
  );
}
