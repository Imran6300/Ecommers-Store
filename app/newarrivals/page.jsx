export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "New Arrivals – Autobotwa Store",
  description: "Check out the latest fashion drops and newly added products.",
};

export default async function NewArrivalsPage() {
  let products = [];

  try {
    products = await getProducts();
  } catch (error) {
    console.error("New Arrivals API Error:", error);
    products = [];
  }

  const sorted =
    products && products.length > 0 ? products.sort((a, b) => b.id - a.id) : [];

  if (!sorted || sorted.length === 0) {
    return (
      <div className="text-center mt-32 text-lg">
        ⚠️ New arrivals are unavailable right now. Please check back soon.
      </div>
    );
  }

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {sorted.map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
