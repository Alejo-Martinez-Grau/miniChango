import React from "react";

const ProductList = (props) => {

  const renderListItem = (i) => {
    return (
      <tr>
        <th scope="row">{props.products[i][0]}</th>
        <td>{props.products[i][1]}</td>
        <td>{props.products[i][2]}</td>
        <td>{props.products[i][2] * props.counters[i]["value"]}</td>
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
