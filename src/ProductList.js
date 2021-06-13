import React, {useState} from 'react';



const ProductList = (props) => {
const [products, setProducts] = useState([[1, "Tomate", 80],[2, "Papa", 60],[3, "Zanahoria", 60],[4, "Palta", 200]]);

const renderListItem = (i) => {
  return (
  <tr>
  <th scope="row">{products[i][0]}</th>
  <td>{products[i][1]}</td>
  <td>{products[i][2]}</td>
  <td>{products[i][2]*props.counters[i]['value']}</td>
</tr>
  );

}

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
  {Array(4).fill(null).map((listItems, i) => {
    return renderListItem(i);
    })}
    {/* {renderListItem()} */}
    {/* <tr>
      <th scope="row">{products[0][0]}</th>
      <td>{products[0][1]}</td>
      <td>{products[0][2]}</td>
      <td>{products[0][2]*props.counters[0]['value']}</td>
    </tr>
    <tr>
      <th scope="row">{products[1][0]}</th>
      <td>{products[1][1]}</td>
      <td>{products[1][2]}</td>
      <td>{products[1][2]*props.counters[1]['value']}</td>
    </tr>
    <tr>
      <th scope="row">{products[2][0]}</th>
      <td>{products[2][1]}</td>
      <td>{products[2][2]}</td>
      <td>{products[2][2]*props.counters[2]['value']}</td>
    </tr>
    <tr>
      <th scope="row">{products[3][0]}</th>
      <td>{products[3][1]}</td>
      <td>{products[3][2]}</td>
      <td>{products[3][2]*props.counters[3]['value']}</td>
    </tr> */}
  </tbody>
</table>
        </div>
    );
}



// function getSubTotal(props){
//     if(props.counter.id) return 4;
// }

export default ProductList;