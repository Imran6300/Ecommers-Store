"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-6 items-center border-b pb-4">
            <img
              src={item.image}
              className="w-24 h-24 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500">₹{item.price}</p>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}
                >
                  −
                </button>

                <span>{item.qty}</span>

                <button onClick={() => updateQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Total: ₹{total}</h2>

        <button className="bg-[#00CEC9] px-8 py-3 rounded-full font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
}
