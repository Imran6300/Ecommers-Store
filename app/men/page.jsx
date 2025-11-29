export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Men's Clothing – Autobotwa Store",
  description: "Browse men's fashion including shirts, shoes, and accessories.",
};

export default async function MenPage() {
  let products = await getProducts();

  const men = products.filter((item) =>
    item.category?.toLowerCase().includes("mens")
  );

  if (!men.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ No men's items found right now.
      </div>
    );

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {men.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
