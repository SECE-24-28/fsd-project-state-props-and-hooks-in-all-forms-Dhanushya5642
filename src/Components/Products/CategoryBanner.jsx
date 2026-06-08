import React from "react";
import FreshVegetablesImg from "../../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import FruitsCollectionsImg from "../../Assets/Css/Images/Categories/Fruits_Collections.png";
import DailyEssentialsImg from "../../Assets/Css/Images/Categories/Daily_Essentials.png";
import SnacksAndBeveragesImg from "../../Assets/Css/Images/Categories/SnacksAndBeverages.png";
import PersonalCareImg from "../../Assets/Css/Images/Categories/Personal_Care.png";

function CategoryBanner() {
  const categories = [
    {
      title: "Fresh \nVegetables",
      discount: "Flat 30% OFF",
      bgClass: "bg-[#edf5e7]",
      textClass: "text-green-900",
      image: FreshVegetablesImg,
    },
    {
      title: "Fruits \nCollection",
      discount: "Flat 25% OFF",
      bgClass: "bg-[#fff4df]",
      textClass: "text-orange-900",
      image: FruitsCollectionsImg,
    },
    {
      title: "Dairy \nEssentials",
      discount: "Upto 40% OFF",
      bgClass: "bg-[#eaf5ff]",
      textClass: "text-blue-900",
      image: DailyEssentialsImg,
    },
    {
      title: "Snacks & \nBeverages",
      discount: "Upto 35% OFF",
      bgClass: "bg-[#fff0df]",
      textClass: "text-amber-900",
      image: SnacksAndBeveragesImg,
    },
    {
      title: "Personal \nCare",
      discount: "Upto 30% OFF",
      bgClass: "bg-[#fde8ef]",
      textClass: "text-pink-900",
      image: PersonalCareImg,
    },
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-10 mt-8">
      <div className="grid grid-cols-5 gap-5">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`relative h-[240px] ${cat.bgClass} rounded-[28px] overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-xl transition duration-300`}
          >
            <div className="p-6">
              <h2 className={`text-[28px] leading-tight font-bold ${cat.textClass} whitespace-pre-line`}>
                {cat.title}
              </h2>

              <p className="mt-4 text-[18px] text-black font-semibold">
                {cat.discount}
              </p>
            </div>

            <img
              src={cat.image}
              alt={cat.title.replace("\n", " ")}
              className="absolute bottom-0 right-0 w-[220px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryBanner;
