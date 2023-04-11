import React from "react";
import assets from "../../assets";
import "./menu.scss";

function Menu() {
  const menuList = [
    {
      img: assets.saw699,
      name: "Unlimited 699",
    },
    {
      img: assets.saw799,
      name: "Unlimited 799",
    },
    {
      img: assets.sawAlaCarte,
      name: "Ala Carte",
    },
    {
      img: assets.sawPasta,
      name: "Pasta",
    },
    {
      img: assets.sawDrinks,
      name: "Drinks",
    },
  ];
  return (
    <section
      className="section menu bg-black-10 text-center"
      id="menu"
      aria-label="menu"
    >
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>

        <h2 className="headline-1 section-title">We Offer Top Notch</h2>

        <p className="section-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          itaque porro, sed aut, debitis magnam maiores deserunt explicabo
          voluptatibus quis amet.
        </p>

        <ul className="grid-list">
          {menuList.map((menu, index) => {
            return (
              <li key={index}>
                <div className="service-card">
                  <a href="#" className="has-before hover:shine">
                    <figure
                      className="card-banner img-holder"
                      style={{ "--width": 285, "--height": 336 }}
                    >
                      <img
                        src={menu.img}
                        width={285}
                        height={336}
                        loading="lazy"
                        alt={menu.name}
                        className="img-cover"
                      />
                    </figure>
                  </a>

                  <div className="card-content">
                    <h3 className="title-4 card-title">{menu.name}</h3>

                    <a href="#" className="btn-text hover-underline label-2">
                      View Menu
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <img
          src={assets.shape1}
          width={246}
          height={412}
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src={assets.shape2}
          width={343}
          height={345}
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
}

export default Menu;
