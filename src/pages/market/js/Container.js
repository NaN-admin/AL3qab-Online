import "../css/container.css";
import products from "../json/products.json";
import React from "react";
import { Link } from "react-router-dom";

export default function Container() {
  // if (products[0].id === "1") {
  //   products.reverse();
  // }
  return (
    <section className="cards-primary">
      <div className="card-container">
        {products.map((items, key) => {
          const text = items.desc.split(" ");
          text.length = 21;
          return (
            <article className="card" key={key} id={items.id}>
              <Link to={items.id} className="card-details">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className=" prevent"
                />
                <div className="card-header">
                  <div className="info">
                    <span className="date">{items.date}</span>
                  </div>
                </div>
                <div className="card-footer">
                  <h3>{items.title}</h3>
                  {}
                  <p>{text.join(" ")}</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
