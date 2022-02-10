import React from "react";

function Alert({ alertText, closeHandler }) {
    return (
        <div className="alert">
            <div className="alert-backdrop" onClick={closeHandler}>
                <div className="alert-window" onClick={(e) => e.stopPropagation()}>
                    <button className="close" onClick={closeHandler}>
                        &times;
                    </button>
                    <div className="alert-text">{alertText}</div>
                </div>
            </div>
        </div>
    );
}

export default Alert;
