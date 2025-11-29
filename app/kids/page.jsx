import Card from "@/Components/Cards/Card";
import { getProducts } from "@/utils/fetchProducts";

export const metadata = {
  title: "Kids Fashion – Autobotwa Store",
  description:
    "Discover fun, stylish, and comfortable kids' clothing for all ages.",
};

export default async function KidsPage() {
  const products = await getProducts();

  const kids = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div className="mt-32 px-5 flex flex-wrap justify-center gap-6 py-10">
      {kids.slice(0, 8).map((item) => (
        <Card key={item.id} Data={item} />
      ))}
    </div>
  );
}
