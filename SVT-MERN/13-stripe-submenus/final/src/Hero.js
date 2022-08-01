import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Best E-commerce <br />
            for the people of the internet
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tenetur
            doloremque aut velit cum exercitationem, explicabo, nulla nihil
            laborum suscipit ab est porro neque quasi reprehenderit voluptas
            ullam sint consequuntur esse repellat mollitia cumque!
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
