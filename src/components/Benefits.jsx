import React from "react";
import FreeShippingImg from "../assets/free-shipping.png";
import SupportImg from "../assets/support.png";
import MoneyReturnImg from "../assets/money-return.png";
import DiscountImg from "../assets/discount.png";

const Benefits = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <BenefitItem
          icon={
            <img
              src={FreeShippingImg}
              alt="Free Shipping"
              className="w-16 h-16 mr-4"
            />
          }
          title="Free Shipping"
          description="Free shipping on all orders"
        />
        <BenefitItem
          icon={
            <img
              src={SupportImg}
              alt="Support 24/7"
              className="w-16 h-16 mr-4"
            />
          }
          title="Support 24/7"
          description="Support available 24/7"
        />
        <BenefitItem
          icon={
            <img
              src={MoneyReturnImg}
              alt="Money Return"
              className="w-16 h-16 mr-4"
            />
          }
          title="Money Return"
          description="Money return on all orders"
        />
        <BenefitItem
          icon={
            <img
              src={DiscountImg}
              alt="Order Discount"
              className="w-16 h-16 mr-4"
            />
          }
          title="Order Discount"
          description="Discount on all orders"
        />
      </div>
    </div>
  );
};

const BenefitItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-center p-4 rounded-lg">
      {icon}
      <div>
        <p className="font-bold text-lg">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Benefits;
