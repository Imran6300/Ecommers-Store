export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "New Arrivals – Autobotwa Store",
  description: "The latest products added to the store.",
};

export default async function NewArrivalsPage() {
  let products = await getProducts();

  const sorted = [...products].sort((a, b) => b.id - a.id);

  if (!sorted.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ No new products available right now.
      </div>
    );

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {sorted.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
