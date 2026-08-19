"use client";

import { useEffect, useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState([]);
  const [cart, setCart] = useState([]);

  // =====================================================
  // Load Wishlist + Cart
  // =====================================================

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const savedWishlist =
          localStorage.getItem("daafoli_wishlist");

        if (!savedWishlist) {
          setWishlistIds([]);
          return;
        }

        const parsedWishlist =
          JSON.parse(savedWishlist);

        if (Array.isArray(parsedWishlist)) {
          setWishlistIds(parsedWishlist);
        } else {
          setWishlistIds([]);
        }
      } catch (error) {
        console.error(
          "خطا در خواندن Wishlist:",
          error
        );

        setWishlistIds([]);
      }
    };

    const loadCart = () => {
      try {
        const savedCart =
          localStorage.getItem("daafoli_cart");

        if (!savedCart) {
          setCart([]);
          return;
        }

        const parsedCart =
          JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
        } else {
          setCart([]);
        }
      } catch (error) {
        console.error(
          "خطا در خواندن Cart:",
          error
        );

        setCart([]);
      }
    };

    // بارگذاری اولیه
    loadWishlist();
    loadCart();

    // ===================================================
    // Events
    // ===================================================

    const handleWishlistUpdated = () => {
      loadWishlist();
    };

    const handleCartUpdated = () => {
      loadCart();
    };

    const handleStorage = (event) => {
      if (event.key === "daafoli_wishlist") {
        loadWishlist();
      }

      if (event.key === "daafoli_cart") {
        loadCart();
      }
    };

    window.addEventListener(
      "wishlistUpdated",
      handleWishlistUpdated
    );

    window.addEventListener(
      "cartUpdated",
      handleCartUpdated
    );

    window.addEventListener(
      "storage",
      handleStorage
    );

    // Cleanup
    return () => {
      window.removeEventListener(
        "wishlistUpdated",
        handleWishlistUpdated
      );

      window.removeEventListener(
        "cartUpdated",
        handleCartUpdated
      );

      window.removeEventListener(
        "storage",
        handleStorage
      );
    };
  }, []);

  // =====================================================
  // Wishlist Products
  // =====================================================

  const wishlistProducts = products.filter(
    (product) =>
      wishlistIds.includes(product.id)
  );

  // =====================================================
  // Remove From Wishlist
  // =====================================================

  const removeFromWishlist = (productId) => {
    setWishlistIds((currentIds) => {
      const newIds = currentIds.filter(
        (id) => id !== productId
      );

      localStorage.setItem(
        "daafoli_wishlist",
        JSON.stringify(newIds)
      );

      window.dispatchEvent(
        new Event("wishlistUpdated")
      );

      return newIds;
    });
  };

  // =====================================================
  // Add To Cart
  // =====================================================

  const addToCart = (productId) => {
    const product = products.find(
      (item) => item.id === productId
    );

    if (!product) {
      return;
    }

    if (!product.stock) {
      return;
    }

    setCart((currentCart) => {
      const existingProduct =
        currentCart.find(
          (item) => item.id === productId
        );

      let newCart;

      if (existingProduct) {
        newCart = currentCart.map(
          (item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        );
      } else {
        newCart = [
          ...currentCart,
          {
            id: productId,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem(
        "daafoli_cart",
        JSON.stringify(newCart)
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      return newCart;
    });
  };

  // =====================================================
  // Cart Quantity
  // =====================================================

  const getCartQuantity = (productId) => {
    const cartItem = cart.find(
      (item) =>
        item.id === productId
    );

    if (!cartItem) {
      return 0;
    }

    return cartItem.quantity;
  };

  // =====================================================
  // Render
  // =====================================================

  return (
    <main className="min-h-screen bg-[#FCFAFB]">

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="border-b border-[#EFE7EA] bg-white">

        <div className="mx-auto max-w-7xl px-5 py-14">

          <div className="text-center">

            <h1 className="text-3xl font-extrabold text-[#111111] md:text-4xl">
              علاقه‌مندی‌های من
            </h1>

            <p className="mt-4 text-sm text-gray-500">
              محصولاتی که برای خرید بعدی ذخیره کرده‌اید
            </p>

          </div>

        </div>

      </section>

      {/* =================================================
          PRODUCTS
      ================================================= */}

      <section className="mx-auto max-w-7xl px-5 py-12">

        {wishlistProducts.length > 0 ? (

          <>

            {/* Count */}

            <div className="mb-8 flex items-center justify-between">

              <p className="text-sm text-gray-500">

                {wishlistProducts.length.toLocaleString(
                  "fa-IR"
                )}{" "}
                محصول در علاقه‌مندی‌ها

              </p>

            </div>

            {/* Products */}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {wishlistProducts.map(
                (product) => (

                  <ProductCard
                    key={product.id}
                    product={product}

                    // Wishlist
                    isWishlisted={true}
                    onToggleWishlist={() =>
                      removeFromWishlist(
                        product.id
                      )
                    }

                    // Cart
                    cartQuantity={getCartQuantity(
                      product.id
                    )}
                    onAddToCart={addToCart}
                  />

                )
              )}

            </div>

          </>

        ) : (

          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-[#EFE7EA] bg-white px-5 text-center">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F8EDF1]">

              <span className="text-3xl">
                ♡
              </span>

            </div>

            <h2 className="text-2xl font-bold text-[#111111]">
              لیست علاقه‌مندی‌های شما خالی است
            </h2>

            <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
              هنوز محصولی به علاقه‌مندی‌های خود
              اضافه نکرده‌اید.
              محصولات مورد علاقه‌تان را ذخیره کنید
              تا بعداً راحت‌تر آن‌ها را پیدا کنید.
            </p>

          </div>

        )}

      </section>

    </main>
  );
} 