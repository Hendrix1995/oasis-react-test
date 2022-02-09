import React from "react";

function Alert() {
    return (
        <div className="alert">
            <div className="alert-backdrop">
                <div className="alert-window">
                    <button className="close">&times;</button>
                    <div className="alert-text">Alert</div>
                </div>
            </div>
        </div>
    );
}

export default Alert;
