/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cart from "../images/cart.png";

// stateless functional component
// snippet sfc
const NavBar = (props) => {
  //
  const totalSum = (i) => {
    let totalArray = [];
    let total;

    for (i = 0; i < props.counters.length; i++) {
      totalArray = totalArray.concat(
        props.products[i][2] * props.counters[i]["value"]
      );
    }

    total = totalArray.reduce((acc, item) => {
      return (acc += item);
    },0);
    return total;
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
        Shopping
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>

      <h3>{`Total: $${totalSum(props.counters.length)}`}</h3>
    </nav>
  );
};

export default NavBar;
