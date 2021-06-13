import React from 'react';

const ProductList = () => {
    return (
        <div className="table-responsive-sm">
            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Producto</th>
      <th scope="col">Precio Unitario($)</th>
      <th scope="col">Sub Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default ProductList;