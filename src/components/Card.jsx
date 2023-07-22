import React from "react";

const Card = ({ icon, title, description, color }) => {
  return (
    <div
      className={`${color} rounded-lg p-8 text-white text-center shadow-md relative mb-3`}
    >
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-16">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mt-12 mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;
