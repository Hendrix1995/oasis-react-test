import React from "react";

function Cart({ cartItems, removeFromCart }) {
    const showItemId = (itemId) => {
        alert(itemId);
    };

    return (
        <section className="cart">
            {cartItems.map((item) => (
                <div className="cart-item-box" key={item.id}>
                    <img className="cart-item-thumbnail" src={item.thumbnailUrl} alt={item.id} onClick={() => showItemId(item.id)} />
                    <div className="cart-item-info" onClick={() => showItemId(item.id)}>
                        <div className="cart-item-info-text">albumId: {item.albumId}</div>
                        <div className="cart-item-info-text">id: {item.id}</div>
                        <div className="cart-item-info-text">title: {item.title}</div>
                        <div className="cart-item-info-text">url: {item.url}</div>
                        <div className="cart-item-info-text">thumbnailUrl: {item.thumbnailUrl}</div>
                    </div>
                    <button className="cart-item-remove-button" onClick={() => removeFromCart(item)}>
                        삭제
                    </button>
                </div>
            ))}
        </section>
    );
}

export default Cart;
