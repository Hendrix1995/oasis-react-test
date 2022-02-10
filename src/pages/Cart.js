import React from "react";

function Cart({ cartItems, removeFromCart, openAlertHandler }) {
    const showItemId = (itemId) => {
        openAlertHandler(itemId);
    };

    return (
        <section className="cart">
            {cartItems.length !== 0 ? (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item-box" key={item.id} onClick={() => showItemId(item.id)}>
                            <img className="cart-item-thumbnail" src={item.thumbnailUrl} alt={item.id} />
                            <div className="cart-item-info">
                                <div className="cart-item-info-text">albumId: {item.albumId}</div>
                                <div className="cart-item-info-text">id: {item.id}</div>
                                <div className="cart-item-info-text">title: {item.title}</div>
                                <div className="cart-item-info-text">url: {item.url}</div>
                                <div className="cart-item-info-text">thumbnailUrl: {item.thumbnailUrl}</div>
                            </div>
                            <div className="cart-item-button-continuer" onClick={(e) => e.stopPropagation()}>
                                <button className="cart-item-remove-button" onClick={() => removeFromCart(item)}>
                                    삭제
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <div className="cart-item-empty-text">카드가 비어 있습니다</div>
            )}
        </section>
    );
}

export default Cart;
