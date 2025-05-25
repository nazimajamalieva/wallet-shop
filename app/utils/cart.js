export const addToCart = (product) => {
  const savedCart = localStorage.getItem("cart");
  const cart = savedCart ? JSON.parse(savedCart) : [];

  const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

export const getCart = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

export const updateCartItemQuantity = (id, quantity) => {
  const savedCart = localStorage.getItem("cart");
  const cart = savedCart ? JSON.parse(savedCart) : [];

  const updatedCart = cart.map((item) =>
    item.id === id ? { ...item, quantity } : item
  );

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const removeFromCart = (id) => {
  const savedCart = localStorage.getItem("cart");
  const cart = savedCart ? JSON.parse(savedCart) : [];

  const updatedCart = cart.filter((item) => item.id !== id);

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
