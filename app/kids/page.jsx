export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Kids Fashion – Autobotwa Store",
  description:
    "Discover fun, stylish, and comfortable kids' clothing for all ages.",
};

export default async function KidsPage() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("Kids API Error:", error);
    products = [];
  }

  const kids = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  if (!kids || kids.length === 0) {
    return (
      <div className="text-center mt-32 text-lg">
        ⚠️ Kids products are unavailable right now. Please try again later.
      </div>
    );
  }

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {kids.slice(0, 8).map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
