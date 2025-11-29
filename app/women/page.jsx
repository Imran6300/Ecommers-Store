export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Women's Clothing – Autobotwa Store",
  description:
    "Shop women's dresses, tops, fashion essentials and new arrivals.",
};

export default async function WomenPage() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Women API Error:", error);
    products = [];
  }

  const women = products.filter((item) => item.category === "women's clothing");

  if (!women || women.length === 0) {
    return (
      <div className="text-center mt-32 text-lg">
        ⚠️ Women's products are unavailable right now. Please try again later.
      </div>
    );
  }

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {women.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
