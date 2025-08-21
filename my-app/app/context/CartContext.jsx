"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    // اضافه کردن محصول به سبد خرید
    const AddToCart = (product) => {
        setCart((prev) => {
            const exist = prev.find((p) => p.id === product.id);
            if (exist) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, qty: p.qty + 1 } : p
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    // حذف محصول از سبد
    const handleDelete = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    // افزایش تعداد
    const upQty = (id) => {
        setCart((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, qty: p.qty + 1 } : p
            )
        );
    };

    // کاهش تعداد
    const dnQty = (id) => {
        setCart((prev) =>
            prev.map((p) =>
                p.id === id && p.qty > 1 ? { ...p, qty: p.qty - 1 } : p
            )
        );
    };

    return (
        <CartContext.Provider 
            value={{ cart, search, setSearch, AddToCart, handleDelete, upQty, dnQty }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);