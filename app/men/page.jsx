export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Men's Fashion – Autobotwa Store",
};

export default async function MenPage() {
  let products = await getProducts();

  // Matches all men categories
  const men = products.filter((item) => item.category === "mens");

  if (!men.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ No men's products found.
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
