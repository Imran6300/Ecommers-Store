export async function getProducts() {
  const API = "https://fakestoreapi.com/products";

  try {
    const res = await fetch(API, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("API returned not OK");
    }

    const data = await res.json();

    // Ensure data is valid array
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid product data");
    }

    return data;
  } catch (err) {
    console.error("❌ getProducts() API Failed →", err.message);

    // ⭐ GUARANTEED fallback products (never empty)
    return [
      {
        id: 1,
        title: "Casual Men's Shirt",
        price: 499,
        description: "Fallback product (API failed). Stylish and comfortable.",
        category: "men's clothing",
        image: "https://via.placeholder.com/300x400",
      },
      {
        id: 2,
        title: "Women's Summer Dress",
        price: 799,
        description: "Fallback product (API failed). Beautiful floral design.",
        category: "women's clothing",
        image: "https://via.placeholder.com/300x400",
      },
      {
        id: 3,
        title: "Kids T-Shirt",
        price: 299,
        description: "Fallback product (API failed). Soft cotton kids wear.",
        category: "men's clothing",
        image: "https://via.placeholder.com/300x400",
      },
    ];
  }
}
