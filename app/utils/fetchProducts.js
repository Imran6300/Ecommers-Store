export async function getProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products", {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("API failed");
    }

    const data = await res.json();

    return data.products; // dummyjson returns { products: [] }
  } catch (err) {
    console.error("API Error:", err.message);

    // Strong fallback to prevent UI crashing
    return [
      {
        id: 1,
        title: "Fallback Men's Shirt",
        price: 599,
        description:
          "This is fallback data displayed when the API fails. Stylish Men's shirt.",
        category: "men",
        thumbnail: "https://via.placeholder.com/300x400",
      },
      {
        id: 2,
        title: "Fallback Women's Dress",
        price: 899,
        description: "Fallback product to keep UI stable even if API is down.",
        category: "women",
        thumbnail: "https://via.placeholder.com/300x400",
      },
    ];
  }
}
