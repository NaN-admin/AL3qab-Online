import "../css/container.css";
import blogs from "../json/blogs.json";
import React from "react";
import { Link } from "react-router-dom";

export default function Container() {
  // if (blogs[0].id === "1") {
  //   blogs.reverse();
  // }
  return (
    <section className="cards-primary">
      <div className="card-container">
        {blogs.map((items, key) => {
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
                  <div className="avatar">
                    <img src={items.authorLogo} alt={items.authorName} />
                  </div>
                  <div className="info">
                    <span className="author-name">{items.authorName}</span>
                    <span className="date">{items.date}</span>
                  </div>
                </div>
                <div className="card-footer">
                  <h3>{items.title}</h3>
                  {}
                  <p>
                    {text.join(" ")} <strong>... قرائة المزيد</strong>
                  </p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
    
  );
}
