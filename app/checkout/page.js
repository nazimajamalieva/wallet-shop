"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("checkoutData");
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return items.length > 0 ? 10 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {items.length === 0 ? (
          <p className="text-gray-600">No items to checkout.</p>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="mb-4 border-b pb-4">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="text-sm text-gray-800 mt-1">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-800">
                      Price: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Shipping</span>
                <span>${calculateShipping().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 text-lg border-t pt-4 mt-4">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => router.push("/login")}
              >
                Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
