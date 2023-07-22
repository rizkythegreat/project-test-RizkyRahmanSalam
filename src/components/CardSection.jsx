import React from "react";
import Card from "./Card";
import { GoLightBulb } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";

const CardSection = () => {
  const cardsData = [
    {
      icon: <GoLightBulb size={25} />,
      title: "INNOVATIVE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-red-400",
    },
    {
      icon: <BsBank size={25} />,
      title: "LOYALTY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-green-800",
    },
    {
      icon: <FaBalanceScale size={25} />,
      title: "RESPECT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "bg-cyan-600",
    },
  ];

  return (
    <div>
      <h2 className=" text-2xl font-semibold text-center uppercase space-y-2 text-gray-700">
        Our Values
      </h2>
      <div className="md:flex md:items-center md:justify-between md:space-x-2 p-8 mx-auto max-w-5xl gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
