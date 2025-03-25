import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const myStyle = {
  //   color: "orange",
  //   fontSize: "50px",
  //   textTransform: "uppercase",
  // };
  return (
    <header className="header">
      <h1>Fast Pizza Delivery Co.</h1>;
    </header>
  );
}

function Menu() {
  const Pizzas = pizzaData;
  const pizzaNum = Pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menus</h2>;
      {pizzaNum > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>sorry we don't have pizzas today </p>
      )}
      {/* <Pizza
        image="pizzas/focaccia.jpg"
        name="pizza focaccia"
        ingredient="Bread with italian olive oil and rosemary"
        price={20} 
      />
      <Pizza
        image="pizzas/funghi.jpg"
        name="pizza funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        price={14}
      /> */}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 6;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order openHour={openHour} closeHour={closeHour} />
        ) : (
          <p>
            We are closed. Please visit us tomorrow between {openHour}:00 {"am"}{" "}
            to {closeHour}:00 {"pm"}
          </p>
        )}
      </footer>
    </div>
  );
}

function Order({ openHour }) {
  return (
    <div className="order">
      <p>
        We are open until {openHour}:00 {"pm"} Come and Visit us Or Order Now
      </p>
      <button className="btn">Order Now!</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
