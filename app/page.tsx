import fs from "node:fs";
import path from "node:path";
import Landing from "./components/Landing";
import Script from "next/script";

type FeaturedDish = {
  name: string;
  desc: string;
  image: string;
};

const readImages = (folder: string) => {
  const imagesDir = path.join(process.cwd(), "public", folder);
  return fs
    .readdirSync(imagesDir)
    .filter((file) => /\.(png|jpg|jpeg|webp|svg)$/i.test(file))
    .sort()
    .map((file) => `/${folder}/${file}`);
};

const getImages = () => {
  const imageFiles = readImages("images");

  const findBy = (keyword: string, fallbackIndex = 0) => {
    const match = imageFiles.find((file) =>
      file.toLowerCase().includes(keyword.toLowerCase())
    );
    return match ?? imageFiles[fallbackIndex] ?? "";
  };

  return {
    hero: findBy("premium_indian_thali", 0),
    hygiene: findBy("hygienic_kitchen", 1),
    homeTaste: findBy("home_style_curry", 2),
    delivery: findBy("fast_food_delivery", 3),
    heroFloat: findBy("tawa_roti", 4),
    featured: [
      {
        name: "Paneer Butter Masala",
        desc: "Creamy tomato gravy with soft paneer.",
        image: findBy("paneer_butter_masala", 5),
      },
      {
        name: "Dal Makhani",
        desc: "Slow-cooked black lentils with butter.",
        image: findBy("dal_makhani", 6),
      },
      {
        name: "Veg Thali",
        desc: "Balanced plate with curries, roti, and rice.",
        image: findBy("veg_thali", 7),
      },
      {
        name: "Tawa Roti",
        desc: "Fresh, soft rotis hot from the tawa.",
        image: findBy("tawa_roti", 8),
      },
      {
        name: "Veg Biryani",
        desc: "Fragrant basmati rice with spices.",
        image: findBy("veg_biryani", 9),
      },
      {
        name: "South Indian Platter",
        desc: "Dosa, idli, and chutneys.",
        image: findBy("south_indian_platter", 10),
      },
      {
        name: "Street-food Snacks",
        desc: "Crispy, tangy, and fun bites.",
        image: findBy("street_food_snacks", 0),
      },
    ] as FeaturedDish[],
  };
};

export default function Home() {
  const images = getImages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "zumoj",
    description:
      "Ghar ka khana ghar se — premium 100% pure veg cloud kitchen with hygienic cooking, home-style taste, and fast delivery.",
    servesCuisine: "Indian Vegetarian",
  };

  return (
    <>
      <Landing
        featuredDishes={images.featured}
        heroImage={images.hero}
        hygieneImage={images.hygiene}
        homeTasteImage={images.homeTaste}
        deliveryImage={images.delivery}
      />
      <Script
        id="zumoj-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
