import React from "react";
import food1 from "../img/thai.webp"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family-owned restaurant specializing in authentic Thai cuisine, where we blend time-honored recipes with a contemporary flair.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src={food1} />
            </div>
            </section>
        </header>
    )
}

export default Header;