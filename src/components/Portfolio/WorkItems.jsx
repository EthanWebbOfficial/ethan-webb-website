import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <br /> <p className="work__tag">{item.category}</p>
      <h3 className="work__title">{item.title}</h3>
      <p className="work__subtitle">{item.subtitle}</p>
      <a href="#" className="work__button">
        Learn More
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
