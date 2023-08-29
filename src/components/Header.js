import React from "react";
import food1 from "../img/thai.webp"

const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Som Tum (Green Papaya Salad)</h3>
            <p>WWe are a family-owned restaurant specializing in authentic Thai cuisine, where we blend time-honored recipes with a contemporary flair.</p>
            <button>Reserve a Table</button>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;