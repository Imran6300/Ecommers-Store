export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Women's Clothing – Autobotwa Store",
  description: "Shop women's dresses, shoes, bags, and fashion essentials.",
};

export default async function WomenPage() {
  let products = await getProducts();

  const women = products.filter((item) =>
    item.category?.toLowerCase().includes("women")
  );

  if (!women.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ No women's items available right now.
      </div>
    );

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {women.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
