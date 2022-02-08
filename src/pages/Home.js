import React from "react";

function Home({ albums }) {
    return (
        <section className="home">
            <div className="album-continuer">
                {/* {album_10.map((el) => {
                    return el.id % 2 === 0 ? <img key={el.id} className="album-thumbnail" src={el.thumbnailUrl} alt={el.id} /> : null;
                })}
                {album_20.map((el) => {
                    return el.id % 2 === 0 ? <img key={el.id} className="album-thumbnail" src={el.thumbnailUrl} alt={el.id} /> : null;
                })} */}
            </div>
        </section>
    );
}

export default Home;
