export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "New Arrivals – Autobotwa Store",
};

export default async function NewArrivalsPage() {
  let products = await getProducts();

  // ✅ Filter only new arrival products
  const newArrivals = products.filter((item) => item.category === "new");

  if (!newArrivals.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ No new products available.
      </div>
    );

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {newArrivals.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
