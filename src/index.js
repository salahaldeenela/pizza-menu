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
  return (
    <header className="header footer">
      <h1>Fast React Pizza CO. </h1>
    </header>
  );
}

function Footer() {
  const OpenHour = 8;
  const ClosedHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= OpenHour && hour <= ClosedHour;
  console.log(isOpen);

  return (
    <footer>{new Date().toLocaleTimeString()}. We're Currently Open!</footer>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.Image} alt={props.name}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.Ingredients}</p>
        <span>{props.Price}</span>
      </div>
    </div>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        Image="pizzas/spinaci.jpg"
        Ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        Price={15}
      />
      <Pizza
        name="Pizza Funghi"
        Image="pizzas/funghi.jpg"
        Ingredients="Tomato, mushrooms"
        Price={12}
      />
    </main>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
