import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";

function App() {
    const [albums, setAlbums] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const found = cartItems.filter((el) => el.id === item.id);
        if (found.length !== 0) {
            alert("중복된 아이템 입니다");
        } else {
            setCartItems([...cartItems, { albumId: item.albumId, id: item.id, title: item.title, url: item.url, thumbnailUrl: item.thumbnailUrl }]);
            alert("추가되었습니다!");
        }
    };

    const removeFromCart = (item) => {
        const found = cartItems.filter((el) => el.id === item.id);
        const index = cartItems.findIndex((el) => el.id === found[0].id);
        setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index + 1, cartItems.length)]);
    };

    const getAlbum = (ids) => {
        return Promise.all(
            ids.map((id) =>
                axios
                    .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`, { withCredentials: true })
                    .then((res) => res.data)
                    .catch((err) => console.log(err))
            )
        );
    };

    useEffect(() => {
        getAlbum([10, 20]).then((album) => {
            let temp = [];
            album.map((el) => temp.push(...el));
            setAlbums(temp);
        });
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home albums={albums} addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
