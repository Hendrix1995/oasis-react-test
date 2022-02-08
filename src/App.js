import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";

function App() {
    const [album_10, setAlbum_10] = useState([]);
    const [album_20, setAlbum_20] = useState([]);

    const getAlbum = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/10/photos`, { withCredentials: true })
            .then((res) => setAlbum_10(res.data))
            .catch((err) => console.log("10번 엘범 데이터 수신 애러"));
        axios
            .get(`https://jsonplaceholder.typicode.com/albums/20/photos`, { withCredentials: true })
            .then((res) => setAlbum_20(res.data))
            .catch((err) => console.log("20번 엘범 데이터 수신 애러"));
    };

    useEffect(() => {
        getAlbum();
    }, []);

    return (
        <>
            <Header />
            <Home album_10={album_10} album_20={album_20} />
        </>
    );
}

export default App;
