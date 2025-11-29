export const dynamic = "force-dynamic";

import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Kids Fashion – Autobotwa Store",
};

export default async function KidsPage() {
  let products = await getProducts();

  const kids = products.filter((item) => item.category === "kids");

  if (!kids.length)
    return (
      <div className="mt-32 text-center text-lg">
        ⚠️ Kids products unavailable right now.
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
