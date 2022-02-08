import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header.js";
import Home from "./pages/Home.js";

function App() {
    const [albums, setAlbums] = useState([]);

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
        getAlbum([10, 20]).then((album) => setAlbums(album));
    }, []);

    return (
        <>
            <Header />
            <Home albums={albums} />
        </>
    );
}

export default App;
