export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Kids Fashion – Autobotwa Store",
  description: "Discover stylish and comfortable kids wear.",
};

export default async function KidsPage() {
  let products = await getProducts();

  // Kids doesn't exist → use shirts + tops
  const kids = products.filter((item) =>
    ["tops", "mens-shirts", "womens-dresses", "sports-accessories"].includes(
      item.category?.toLowerCase()
    )
  );

  if (!kids.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ Kids fashion products are unavailable right now.
      </div>
    );

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {kids.slice(0, 8).map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
