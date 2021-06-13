import React, { useState } from "react";

const ProductList = (props) => {
  //initial state, for the exercize there is no need to modify the state with setProducts
  const [products] = useState([
    [1, "Tomate", 80],
    [2, "Papa", 60],
    [3, "Zanahoria", 60],
    [4, "Palta", 200],
  ]);

  const renderListItem = (i) => {
    return (
      <tr>
        <th scope="row">{products[i][0]}</th>
        <td>{products[i][1]}</td>
        <td>{products[i][2]}</td>
        <td>{products[i][2] * props.counters[i]["value"]}</td>
      </tr>
    );
  };

  return (
    <div className="table-responsive-sm">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio x Kg ($)</th>
            <th scope="col">Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Renders every list item */}
          {Array(props.counters.length)
            .fill(null)
            .map((listItems, i) => {
              return renderListItem(i);
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
