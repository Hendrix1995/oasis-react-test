import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <nav onClick={() => navigate("/")}>Header</nav>
            <nav onClick={() => navigate("/cart")}>cart</nav>
        </header>
    );
}

export default Header;
