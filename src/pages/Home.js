import React from "react";

function Home({ albums }) {
    return (
        <section className="home">
            <div className="album-continuer">
                {albums.map((el) => {
                    return el.id % 2 === 0 ? (
                        <div className="album-box">
                            <img key={el.id} className="album-thumbnail" src={el.thumbnailUrl} alt={el.id} />
                            <span className="album-event-text">클릭하여 추가</span>
                        </div>
                    ) : null;
                })}
            </div>
        </section>
    );
}

export default Home;
