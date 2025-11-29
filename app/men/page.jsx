export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Men's Clothing – Autobotwa Store",
  description:
    "Browse men's fashion including shirts, jackets, hoodies, and accessories.",
};

export default async function MenPage() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Men API Error:", error);
    products = [];
  }

  const men = products.filter((item) => item.category === "men's clothing");

  if (!men || men.length === 0) {
    return (
      <div className="text-center mt-32 text-lg">
        ⚠️ Men's products are unavailable right now. Please try again later.
      </div>
    );
  }

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {men.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
