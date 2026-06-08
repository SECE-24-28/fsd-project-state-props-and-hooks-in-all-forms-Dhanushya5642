import React, { useState, useMemo } from "react";
import ProductCard from "./Products/ProductCard";

// Category images
import FreshVegetablesImg from "../Assets/Css/Images/Categories/Fresh_Vegetables.png";
import FruitsCollectionsImg from "../Assets/Css/Images/Categories/Fruits_Collections.png";
import DailyEssentialsImg from "../Assets/Css/Images/Categories/Daily_Essentials.png";
import SnacksAndBeveragesImg from "../Assets/Css/Images/Categories/SnacksAndBeverages.png";
import PersonalCareImg from "../Assets/Css/Images/Categories/Personal_Care.png";

// Dairy images
import MilkImg from "../Assets/Css/Images/DairyEssentials/Milk.png";
import ButterImg from "../Assets/Css/Images/DairyEssentials/Butter.png";
import PaneerImg from "../Assets/Css/Images/DairyEssentials/Paneer.png";
import TraditionalCurdImg from "../Assets/Css/Images/DairyEssentials/TraditionalCurd.png";
import CheeseSlicesImg from "../Assets/Css/Images/DairyEssentials/CheeseSlices.png";
import GheeImg from "../Assets/Css/Images/DairyEssentials/Ghee.png";
import YogurtImg from "../Assets/Css/Images/DairyEssentials/Yogurt.png";
import FreshCreamImg from "../Assets/Css/Images/DairyEssentials/FreshCream.png";
import CreamCheeseImg from "../Assets/Css/Images/DairyEssentials/CreamCheese.png";
import MozzarellaCheeseImg from "../Assets/Css/Images/DairyEssentials/MozzarellaCheese.png";
import CondensedMilkImg from "../Assets/Css/Images/DairyEssentials/CondensedMilk.png";
import WhippedCreamImg from "../Assets/Css/Images/DairyEssentials/WhippedCream.png";
import SourCreamImg from "../Assets/Css/Images/DairyEssentials/SourCream.png";
import CottageCheesePaneerCrumblesImg from "../Assets/Css/Images/DairyEssentials/CottageCheese(Paneer Crumbles).png";
import RicottaCheeseImg from "../Assets/Css/Images/DairyEssentials/RicottaCheese.png";
import BlueCheesImg from "../Assets/Css/Images/DairyEssentials/BlueCheese.png";
import BrieCheeseImg from "../Assets/Css/Images/DairyEssentials/BrieCheese.png";
import SwissCheeseImg from "../Assets/Css/Images/DairyEssentials/SwissCheese.png";
import CheeseBallsImg from "../Assets/Css/Images/DairyEssentials/CheeseBalls.png";
import VanillaIceCreamImg from "../Assets/Css/Images/DairyEssentials/VanillaIceCream.png";
import ButterscotchIceCreamImg from "../Assets/Css/Images/DairyEssentials/ButterscotchIceCream.png";
import ChocolateMilkshakeImg from "../Assets/Css/Images/DairyEssentials/ChocolateMilkshake.png";
import StrawberryYogurtDrinkImg from "../Assets/Css/Images/DairyEssentials/StrawberryYogurtDrink.png";
import ProbioticDrinkImg from "../Assets/Css/Images/DairyEssentials/ProbioticDrink.png";
import CustardCreamImg from "../Assets/Css/Images/DairyEssentials/CustardCream.png";
import MilkPuddingImg from "../Assets/Css/Images/DairyEssentials/milkPudding.png";
import RicePuddingImg from "../Assets/Css/Images/DairyEssentials/RicePudding(Kheer).png";

// Vegetable images
import TomatoImg from "../Assets/Css/Images/Vegetables/Tomato.png";
import CucumberImg from "../Assets/Css/Images/Vegetables/cucumber.png";
import PotatoImg from "../Assets/Css/Images/Vegetables/potato.png";
import OnionImg from "../Assets/Css/Images/Vegetables/onion.png";
import CarrotImg from "../Assets/Css/Images/Vegetables/carrot.png";
import GreenCapsicumImg from "../Assets/Css/Images/Vegetables/GreenCapsicum.png";
import BroccoliImg from "../Assets/Css/Images/Vegetables/Brocoli.png";
import BrinjalImg from "../Assets/Css/Images/Vegetables/brinjal.png";
import CauliflowerImg from "../Assets/Css/Images/Vegetables/cauliflower.png";
import BeansImg from "../Assets/Css/Images/Vegetables/beans.png";
import LadysFingerImg from "../Assets/Css/Images/Vegetables/lady'sfinger.png";
import GarlicImg from "../Assets/Css/Images/Vegetables/garlic.png";
import GingerImg from "../Assets/Css/Images/Vegetables/ginger.png";
import GreenChiliImg from "../Assets/Css/Images/Vegetables/greenchili.png";
import CorianderImg from "../Assets/Css/Images/Vegetables/coriander.png";
import PumpkinImg from "../Assets/Css/Images/Vegetables/pumpkin.png";
import RadishImg from "../Assets/Css/Images/Vegetables/radish.png";
import LettuceImg from "../Assets/Css/Images/Vegetables/lettuce.png";
import ChickpeasImg from "../Assets/Css/Images/Vegetables/chickpeas.png";
import RedCabbageImg from "../Assets/Css/Images/Vegetables/redcabbage.png";
import RedChiliImg from "../Assets/Css/Images/Vegetables/redchili.png";
import YellowCapsicumImg from "../Assets/Css/Images/Vegetables/YellowCapsicum.png";

// Fruit images
import AppleImg from "../Assets/Css/Images/Fruits/apple.png";
import BananaImg from "../Assets/Css/Images/Fruits/banana.png";
import MangoImg from "../Assets/Css/Images/Fruits/mango.png";
import WatermelonImg from "../Assets/Css/Images/Fruits/watermelon.png";
import GreenGrapesImg from "../Assets/Css/Images/Fruits/greengrapes.png";
import RedGrapesImg from "../Assets/Css/Images/Fruits/redgrapes.png";
import PapayaImg from "../Assets/Css/Images/Fruits/papaya.png";
import PomegranateImg from "../Assets/Css/Images/Fruits/pomogranete.png";
import KiwiImg from "../Assets/Css/Images/Fruits/kiwi.png";
import OrangeImg from "../Assets/Css/Images/Fruits/orange.png";
import PineappleImg from "../Assets/Css/Images/Fruits/pineapple.png";
import StrawberryImg from "../Assets/Css/Images/Fruits/strawberry.png";
import BlueberryImg from "../Assets/Css/Images/Fruits/blueberry.png";
import GuavaImg from "../Assets/Css/Images/Fruits/guava.png";
import LitchiImg from "../Assets/Css/Images/Fruits/litchi.png";
import DragonFruitImg from "../Assets/Css/Images/Fruits/dragonfruit.png";
import CherryImg from "../Assets/Css/Images/Fruits/cherry.png";
import DatesImg from "../Assets/Css/Images/Fruits/dates.png";
import ApricotsImg from "../Assets/Css/Images/Fruits/apricots.png";
import PlumImg from "../Assets/Css/Images/Fruits/plum.png";

function Products() {
  const [activeCategory, setActiveCategory] = useState(null);

  const productsList = [
    { id: 1,  name: "Fresh Tomato",    category: "Vegetables", weight: "500g",    price: 40,  oldPrice: 60,  rating: "4.8 (1.2k)", image: TomatoImg,        deliveryTime: "7 min",  tags: ["Bestseller"], inStock: true },
    { id: 2,  name: "Cucumber",        category: "Vegetables", weight: "1kg",     price: 28,  oldPrice: 40,  rating: "4.6 (621)",  image: CucumberImg,      deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 3,  name: "Potato",          category: "Vegetables", weight: "1kg",     price: 30,  oldPrice: 45,  rating: "4.5 (912)",  image: PotatoImg,        deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 4,  name: "Onion",           category: "Vegetables", weight: "1kg",     price: 20,  oldPrice: 30,  rating: "4.4 (1.1k)", image: OnionImg,         deliveryTime: "7 min",  tags: ["Bestseller"], inStock: true },
    { id: 5,  name: "Carrot",          category: "Vegetables", weight: "500g",    price: 22,  oldPrice: 32,  rating: "4.6 (780)",  image: CarrotImg,        deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 6,  name: "Green Capsicum",  category: "Vegetables", weight: "500g",    price: 35,  oldPrice: 50,  rating: "4.5 (430)",  image: GreenCapsicumImg, deliveryTime: "10 min", tags: ["Fresh"],      inStock: true, stock: 2 },
    { id: 7,  name: "Broccoli",        category: "Vegetables", weight: "500g",    price: 55,  oldPrice: 75,  rating: "4.7 (320)",  image: BroccoliImg,      deliveryTime: "12 min", tags: ["Organic"],    inStock: true },
    { id: 8,  name: "Brinjal",         category: "Vegetables", weight: "500g",    price: 25,  oldPrice: 35,  rating: "4.5 (410)",  image: BrinjalImg,       deliveryTime: "9 min",  tags: ["Fresh"],      inStock: true },
    { id: 9,  name: "Cauliflower",     category: "Vegetables", weight: "1 pc",    price: 30,  oldPrice: 45,  rating: "4.6 (530)",  image: CauliflowerImg,   deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 10, name: "Beans",           category: "Vegetables", weight: "250g",    price: 20,  oldPrice: 30,  rating: "4.4 (380)",  image: BeansImg,         deliveryTime: "9 min",  tags: ["Fresh"],      inStock: true },
    { id: 11, name: "Lady's Finger",   category: "Vegetables", weight: "250g",    price: 22,  oldPrice: 32,  rating: "4.5 (290)",  image: LadysFingerImg,   deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 12, name: "Garlic",          category: "Vegetables", weight: "100g",    price: 15,  oldPrice: 25,  rating: "4.6 (870)",  image: GarlicImg,        deliveryTime: "7 min",  tags: ["Bestseller"], inStock: true },
    { id: 13, name: "Ginger",          category: "Vegetables", weight: "100g",    price: 18,  oldPrice: 28,  rating: "4.5 (640)",  image: GingerImg,        deliveryTime: "7 min",  tags: ["Fresh"],      inStock: true },
    { id: 14, name: "Green Chili",     category: "Vegetables", weight: "100g",    price: 10,  oldPrice: 18,  rating: "4.4 (510)",  image: GreenChiliImg,    deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 15, name: "Coriander",       category: "Vegetables", weight: "100g",    price: 8,   oldPrice: 15,  rating: "4.5 (430)",  image: CorianderImg,     deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 16, name: "Pumpkin",         category: "Vegetables", weight: "1kg",     price: 25,  oldPrice: 38,  rating: "4.4 (260)",  image: PumpkinImg,       deliveryTime: "12 min", tags: ["Fresh"],      inStock: true },
    { id: 17, name: "Radish",          category: "Vegetables", weight: "500g",    price: 18,  oldPrice: 28,  rating: "4.3 (190)",  image: RadishImg,        deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 18, name: "Lettuce",         category: "Vegetables", weight: "250g",    price: 30,  oldPrice: 45,  rating: "4.6 (310)",  image: LettuceImg,       deliveryTime: "11 min", tags: ["Organic"],    inStock: true },
    { id: 19, name: "Chickpeas",       category: "Vegetables", weight: "500g",    price: 55,  oldPrice: 70,  rating: "4.7 (450)",  image: ChickpeasImg,     deliveryTime: "10 min", tags: ["Healthy"],    inStock: true },
    { id: 20, name: "Red Cabbage",     category: "Vegetables", weight: "1kg",     price: 35,  oldPrice: 50,  rating: "4.5 (220)",  image: RedCabbageImg,    deliveryTime: "11 min", tags: ["Organic"],    inStock: true },
    { id: 21, name: "Red Chili",       category: "Vegetables", weight: "100g",    price: 12,  oldPrice: 20,  rating: "4.4 (340)",  image: RedChiliImg,      deliveryTime: "8 min",  tags: ["Fresh"],      inStock: true },
    { id: 22, name: "Yellow Capsicum", category: "Vegetables", weight: "500g",    price: 40,  oldPrice: 55,  rating: "4.6 (280)",  image: YellowCapsicumImg,deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    // Fruits
    { id: 23, name: "Apple",           category: "Fruits",     weight: "1kg",     price: 120, oldPrice: 150, rating: "4.7 (856)",  image: AppleImg,         deliveryTime: "12 min", tags: ["Bestseller"], inStock: true },
    { id: 24, name: "Banana",          category: "Fruits",     weight: "1 Dozen", price: 45,  oldPrice: 60,  rating: "4.6 (891)",  image: BananaImg,        deliveryTime: "9 min",  tags: ["Bestseller"], inStock: true },
    { id: 25, name: "Mango",           category: "Fruits",     weight: "1kg",     price: 90,  oldPrice: 120, rating: "4.9 (2.3k)", image: MangoImg,         deliveryTime: "10 min", tags: ["Seasonal"],   inStock: true },
    { id: 26, name: "Watermelon",      category: "Fruits",     weight: "2kg",     price: 60,  oldPrice: 80,  rating: "4.6 (670)",  image: WatermelonImg,    deliveryTime: "15 min", tags: ["Fresh"],      inStock: true },
    { id: 27, name: "Green Grapes",    category: "Fruits",     weight: "500g",    price: 75,  oldPrice: 100, rating: "4.7 (490)",  image: GreenGrapesImg,   deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    { id: 28, name: "Red Grapes",      category: "Fruits",     weight: "500g",    price: 80,  oldPrice: 105, rating: "4.7 (370)",  image: RedGrapesImg,     deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    { id: 29, name: "Papaya",          category: "Fruits",     weight: "1kg",     price: 50,  oldPrice: 70,  rating: "4.5 (310)",  image: PapayaImg,        deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 30, name: "Pomegranate",     category: "Fruits",     weight: "500g",    price: 85,  oldPrice: 110, rating: "4.8 (560)",  image: PomegranateImg,   deliveryTime: "12 min", tags: ["Healthy"],    inStock: true },
    { id: 31, name: "Kiwi",            category: "Fruits",     weight: "6 pcs",   price: 110, oldPrice: 140, rating: "4.7 (280)",  image: KiwiImg,          deliveryTime: "13 min", tags: ["Imported"],   inStock: true, stock: 1 },
    { id: 32, name: "Orange",          category: "Fruits",     weight: "1kg",     price: 70,  oldPrice: 90,  rating: "4.8 (720)",  image: OrangeImg,        deliveryTime: "10 min", tags: ["Fresh"],      inStock: true },
    { id: 33, name: "Pineapple",       category: "Fruits",     weight: "1 pc",    price: 65,  oldPrice: 85,  rating: "4.6 (410)",  image: PineappleImg,     deliveryTime: "12 min", tags: ["Fresh"],      inStock: true },
    { id: 34, name: "Strawberry",      category: "Fruits",     weight: "250g",    price: 120, oldPrice: 150, rating: "4.8 (630)",  image: StrawberryImg,    deliveryTime: "11 min", tags: ["Imported"],   inStock: true },
    { id: 35, name: "Blueberry",       category: "Fruits",     weight: "125g",    price: 180, oldPrice: 220, rating: "4.8 (290)",  image: BlueberryImg,     deliveryTime: "13 min", tags: ["Imported"],   inStock: true },
    { id: 36, name: "Guava",           category: "Fruits",     weight: "500g",    price: 40,  oldPrice: 60,  rating: "4.6 (480)",  image: GuavaImg,         deliveryTime: "9 min",  tags: ["Fresh"],      inStock: true },
    { id: 37, name: "Litchi",          category: "Fruits",     weight: "500g",    price: 95,  oldPrice: 120, rating: "4.7 (340)",  image: LitchiImg,        deliveryTime: "11 min", tags: ["Seasonal"],   inStock: true },
    { id: 38, name: "Dragon Fruit",    category: "Fruits",     weight: "1 pc",    price: 150, oldPrice: 190, rating: "4.7 (210)",  image: DragonFruitImg,   deliveryTime: "14 min", tags: ["Exotic"],     inStock: true },
    { id: 39, name: "Cherry",          category: "Fruits",     weight: "250g",    price: 200, oldPrice: 250, rating: "4.8 (180)",  image: CherryImg,        deliveryTime: "13 min", tags: ["Imported"],   inStock: true },
    { id: 40, name: "Dates",           category: "Fruits",     weight: "250g",    price: 130, oldPrice: 160, rating: "4.8 (520)",  image: DatesImg,         deliveryTime: "10 min", tags: ["Healthy"],    inStock: true },
    { id: 41, name: "Apricots",        category: "Fruits",     weight: "250g",    price: 110, oldPrice: 140, rating: "4.6 (230)",  image: ApricotsImg,      deliveryTime: "12 min", tags: ["Dry Fruit"],  inStock: true },
    { id: 42, name: "Plum",            category: "Fruits",     weight: "500g",    price: 90,  oldPrice: 115, rating: "4.6 (270)",  image: PlumImg,          deliveryTime: "11 min", tags: ["Fresh"],      inStock: true },
    // Dairy
    { id: 43, name: "Full Cream Milk",          category: "Dairy", weight: "1L",    price: 55,  oldPrice: 70,  rating: "4.9 (2.1k)", image: MilkImg,                      deliveryTime: "10 min", tags: ["Fresh"],       inStock: true },
    { id: 44, name: "Butter",                   category: "Dairy", weight: "100g",  price: 55,  oldPrice: 65,  rating: "4.8 (1.3k)", image: ButterImg,                    deliveryTime: "10 min", tags: ["Bestseller"],  inStock: true },
    { id: 45, name: "Fresh Paneer",             category: "Dairy", weight: "200g",  price: 85,  oldPrice: 100, rating: "4.8 (1.5k)", image: PaneerImg,                    deliveryTime: "11 min", tags: ["Fresh"],       inStock: true },
    { id: 46, name: "Traditional Curd",         category: "Dairy", weight: "500g",  price: 40,  oldPrice: 55,  rating: "4.7 (980)",  image: TraditionalCurdImg,           deliveryTime: "9 min",  tags: ["Fresh"],       inStock: true },
    { id: 47, name: "Cheese Slices",            category: "Dairy", weight: "200g",  price: 95,  oldPrice: 120, rating: "4.6 (640)",  image: CheeseSlicesImg,              deliveryTime: "12 min", tags: ["Fresh"],       inStock: true },
    { id: 48, name: "Pure Ghee",                category: "Dairy", weight: "500ml", price: 280, oldPrice: 340, rating: "4.9 (1.8k)", image: GheeImg,                      deliveryTime: "10 min", tags: ["Pure"],        inStock: true },
    { id: 55, name: "Yogurt",                   category: "Dairy", weight: "400g",  price: 45,  oldPrice: 60,  rating: "4.7 (720)",  image: YogurtImg,                    deliveryTime: "10 min", tags: ["Healthy"],     inStock: true },
    { id: 56, name: "Fresh Cream",              category: "Dairy", weight: "200ml", price: 50,  oldPrice: 65,  rating: "4.6 (410)",  image: FreshCreamImg,                deliveryTime: "11 min", tags: ["Fresh"],       inStock: true },
    { id: 57, name: "Cream Cheese",             category: "Dairy", weight: "180g",  price: 130, oldPrice: 160, rating: "4.7 (380)",  image: CreamCheeseImg,               deliveryTime: "12 min", tags: ["Imported"],    inStock: true },
    { id: 58, name: "Mozzarella Cheese",        category: "Dairy", weight: "200g",  price: 145, oldPrice: 180, rating: "4.8 (510)",  image: MozzarellaCheeseImg,          deliveryTime: "12 min", tags: ["Bestseller"],  inStock: true },
    { id: 59, name: "Condensed Milk",           category: "Dairy", weight: "400g",  price: 90,  oldPrice: 110, rating: "4.7 (630)",  image: CondensedMilkImg,             deliveryTime: "10 min", tags: ["Sweet"],       inStock: true },
    { id: 60, name: "Whipped Cream",            category: "Dairy", weight: "250ml", price: 110, oldPrice: 140, rating: "4.6 (290)",  image: WhippedCreamImg,              deliveryTime: "13 min", tags: ["Fresh"],       inStock: true },
    { id: 61, name: "Sour Cream",               category: "Dairy", weight: "200g",  price: 95,  oldPrice: 120, rating: "4.5 (210)",  image: SourCreamImg,                 deliveryTime: "12 min", tags: ["Fresh"],       inStock: true },
    { id: 62, name: "Cottage Cheese",           category: "Dairy", weight: "200g",  price: 75,  oldPrice: 95,  rating: "4.6 (340)",  image: CottageCheesePaneerCrumblesImg, deliveryTime: "11 min", tags: ["Healthy"],   inStock: true },
    { id: 63, name: "Ricotta Cheese",           category: "Dairy", weight: "200g",  price: 160, oldPrice: 200, rating: "4.7 (190)",  image: RicottaCheeseImg,             deliveryTime: "13 min", tags: ["Imported"],    inStock: true },
    { id: 64, name: "Blue Cheese",              category: "Dairy", weight: "150g",  price: 220, oldPrice: 270, rating: "4.6 (140)",  image: BlueCheesImg,                 deliveryTime: "14 min", tags: ["Imported"],    inStock: true },
    { id: 65, name: "Brie Cheese",              category: "Dairy", weight: "150g",  price: 240, oldPrice: 290, rating: "4.7 (120)",  image: BrieCheeseImg,                deliveryTime: "14 min", tags: ["Imported"],    inStock: true },
    { id: 66, name: "Swiss Cheese",             category: "Dairy", weight: "200g",  price: 180, oldPrice: 220, rating: "4.6 (160)",  image: SwissCheeseImg,               deliveryTime: "13 min", tags: ["Imported"],    inStock: true },
    { id: 67, name: "Cheese Balls",             category: "Dairy", weight: "150g",  price: 85,  oldPrice: 110, rating: "4.5 (280)",  image: CheeseBallsImg,               deliveryTime: "11 min", tags: ["Snack"],       inStock: true },
    { id: 68, name: "Vanilla Ice Cream",        category: "Dairy", weight: "500ml", price: 120, oldPrice: 150, rating: "4.8 (870)",  image: VanillaIceCreamImg,           deliveryTime: "12 min", tags: ["Bestseller"],  inStock: true },
    { id: 69, name: "Butterscotch Ice Cream",   category: "Dairy", weight: "500ml", price: 130, oldPrice: 160, rating: "4.7 (560)",  image: ButterscotchIceCreamImg,      deliveryTime: "12 min", tags: ["Sweet"],       inStock: true },
    { id: 70, name: "Chocolate Milkshake",      category: "Dairy", weight: "300ml", price: 65,  oldPrice: 85,  rating: "4.8 (490)",  image: ChocolateMilkshakeImg,        deliveryTime: "10 min", tags: ["Fresh"],       inStock: true },
    { id: 71, name: "Strawberry Yogurt Drink",  category: "Dairy", weight: "200ml", price: 40,  oldPrice: 55,  rating: "4.6 (370)",  image: StrawberryYogurtDrinkImg,     deliveryTime: "9 min",  tags: ["Healthy"],     inStock: true },
    { id: 72, name: "Probiotic Drink",          category: "Dairy", weight: "65ml",  price: 20,  oldPrice: 28,  rating: "4.7 (1.1k)", image: ProbioticDrinkImg,            deliveryTime: "8 min",  tags: ["Healthy"],     inStock: true },
    { id: 73, name: "Custard Cream",            category: "Dairy", weight: "200g",  price: 55,  oldPrice: 70,  rating: "4.5 (240)",  image: CustardCreamImg,              deliveryTime: "11 min", tags: ["Sweet"],       inStock: true },
    { id: 74, name: "Milk Pudding",             category: "Dairy", weight: "150g",  price: 45,  oldPrice: 60,  rating: "4.6 (200)",  image: MilkPuddingImg,               deliveryTime: "11 min", tags: ["Sweet"],       inStock: true },
    { id: 75, name: "Rice Pudding (Kheer)",     category: "Dairy", weight: "200g",  price: 60,  oldPrice: 80,  rating: "4.7 (310)",  image: RicePuddingImg,               deliveryTime: "12 min", tags: ["Traditional"], inStock: true },
    // Snacks & Beverages
    { id: 49, name: "Whole Wheat Bread", category: "Bakery",   weight: "400g",    price: 35,  oldPrice: 50,  rating: "4.6 (754)",  image: "/images/bun.webp",   deliveryTime: "15 min", tags: ["Fresh"],      inStock: true },
    { id: 50, name: "Orange Juice",    category: "Beverages",  weight: "1L",      price: 85,  oldPrice: 110, rating: "4.7 (420)",  image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?w=400", deliveryTime: "10 min", tags: ["Fresh"],  inStock: true },
    { id: 51, name: "Mixed Nuts",      category: "Snacks",     weight: "200g",    price: 145, oldPrice: 180, rating: "4.8 (530)",  image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?w=400", deliveryTime: "11 min", tags: ["Healthy"],inStock: true },
    { id: 52, name: "Green Tea",       category: "Beverages",  weight: "25 bags", price: 120, oldPrice: 150, rating: "4.7 (860)",  image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?w=400", deliveryTime: "10 min", tags: ["Healthy"],inStock: true },
    // Personal Care
    { id: 53, name: "Aloe Vera Gel",   category: "Personal Care", weight: "150ml", price: 120, oldPrice: 160, rating: "4.7 (430)", image: "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?w=400", deliveryTime: "12 min", tags: ["Organic"],inStock: true },
    { id: 54, name: "Coconut Oil",     category: "Personal Care", weight: "200ml", price: 95,  oldPrice: 130, rating: "4.8 (890)", image: "https://images.pexels.com/photos/3737589/pexels-photo-3737589.jpeg?w=400", deliveryTime: "11 min", tags: ["Pure"],   inStock: true },
  ];

  const shuffledProducts = useMemo(() => [...productsList].sort(() => Math.random() - 0.5), []);

  const categories = [
    { title1: "Fresh", title2: "Vegetables", discount: "Flat 30% OFF", bg: "bg-[#e2ecd9]", text: "text-green-800", img: FreshVegetablesImg, filter: "Vegetables" },
    { title1: "Fruits", title2: "Collection", discount: "Flat 25% OFF", bg: "bg-[#fbeecd]", text: "text-amber-900", img: FruitsCollectionsImg, filter: "Fruits" },
    { title1: "Dairy", title2: "Essentials", discount: "Upto 40% OFF", bg: "bg-[#d8ecfa]", text: "text-blue-800", img: DailyEssentialsImg, filter: "Dairy" },
    { title1: "Snacks &", title2: "Beverages", discount: "Upto 35% OFF", bg: "bg-[#fbe6d0]", text: "text-amber-950", img: SnacksAndBeveragesImg, filter: "Snacks" },
    { title1: "Personal", title2: "Care", discount: "Upto 30% OFF", bg: "bg-[#fcdbe6]", text: "text-pink-800", img: PersonalCareImg, filter: "Personal Care" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f5] flex flex-col text-gray-800">
      <div className="max-w-[1600px] w-full mx-auto px-6 py-6 space-y-6 flex-1 flex flex-col min-w-0">

        {/* 1. TOP CATEGORIES BANNER ROW */}
        <section className="relative">
          <div className="grid grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCategory(activeCategory === cat.filter ? null : cat.filter)}
                className={`relative h-[300px] ${cat.bg} rounded-[24px] overflow-hidden cursor-pointer hover:scale-[1.02] hover:shadow-md transition duration-200 p-6 flex flex-col justify-between border-2 ${
                  activeCategory === cat.filter ? "border-green-600 ring-2 ring-green-400 scale-[1.02] shadow-lg" : "border-gray-100/30"
                }`}
              >
                {activeCategory === cat.filter && (
                  <span className="absolute top-3 right-3 z-20 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Selected</span>
                )}
                <div className="text-left shrink-0 z-10">
                  <h3 className={`text-2xl font-bold ${cat.text} leading-tight`}>
                    {cat.title1}<br />{cat.title2}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{cat.discount}</p>
                </div>
                <img
                  src={cat.img}
                  alt={`${cat.title1} ${cat.title2}`}
                  className="absolute bottom-0 left-0 w-full h-[170px] object-cover select-none"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 2. MAIN HERO BANNER */}
        <section className="bg-[#edf5e7] border border-green-100/55 rounded-[28px] p-8 relative overflow-hidden flex h-[240px] items-center justify-between shadow-sm">
          <div className="w-[55%] text-left">
            <span className="text-green-700 text-xs font-medium tracking-widest uppercase block">BODEGA SPECIAL</span>
            <h3 className="text-4xl font-bold text-green-900 mt-1 leading-tight">
              Fresh Groceries,<br />
              <span className="text-orange-500 font-bold">Delivered in 10 Minutes</span>
            </h3>
            <p className="text-sm text-gray-700 mt-2">Farm fresh produce, handpicked for you.</p>
            <div className="flex items-center gap-5 mt-4 text-xs font-bold text-gray-600">
              <span className="flex items-center gap-1.5 text-gray-700">
                <i className="ri-time-line text-green-700 text-sm"></i>10 Min Delivery
              </span>
              <div className="h-3.5 w-[1px] bg-gray-300"></div>
              <span className="flex items-center gap-1.5 text-gray-700">
                <i className="ri-truck-line text-green-700 text-sm"></i>Free Delivery above ₹499
              </span>
            </div>
          </div>
          <div className="w-[50%] h-full relative flex items-center justify-end shrink-0 select-none">
            <img src="/images/banner_vegetables.png" alt="Fresh grocery basket" className="absolute right-[50px] w-[280px] h-[240px] object-contain mix-blend-multiply" />
          </div>
        </section>

        {/* 3. MAIN CATALOG SECTION */}
        {(() => {
          const filtered = activeCategory
            ? productsList.filter((p) => {
                if (activeCategory === "Snacks") return ["Snacks", "Beverages", "Bakery"].includes(p.category);
                return p.category === activeCategory;
              })
            : shuffledProducts;
          return (
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center shrink-0">
                <div>
                  <h2 className="text-xl font-bold text-green-900">
                    {activeCategory ? `${activeCategory === "Snacks" ? "Snacks & Beverages" : activeCategory}` : "All Products"}
                  </h2>
                  <div className="flex items-center gap-3 mt-0.5">
                    <p className="text-xs text-gray-500">
                      <span className="text-green-700 font-bold">{filtered.length}</span> products available
                    </p>
                    {activeCategory && (
                      <button
                        onClick={() => setActiveCategory(null)}
                        className="flex items-center gap-1 text-xs text-red-500 hover:text-red-600 font-semibold transition cursor-pointer"
                      >
                        <i className="ri-close-line"></i> Clear filter
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-xs font-semibold text-gray-700 shadow-sm transition cursor-pointer">
                    <i className="ri-equalizer-line text-sm text-gray-500"></i>Filter<i className="ri-arrow-down-s-line text-gray-400"></i>
                  </button>
                  <button className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 px-4 py-2 rounded-full text-xs font-semibold text-gray-700 shadow-sm transition cursor-pointer">
                    <i className="ri-arrow-up-down-line text-sm text-gray-500"></i>Sort by<i className="ri-arrow-down-s-line text-gray-400"></i>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}

export default Products;
