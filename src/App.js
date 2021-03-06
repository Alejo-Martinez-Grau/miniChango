import React, { Component} from "react";
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import ProductList from "./ProductList";
// usamos la NAVBAR de bootstrap
// https://getbootstrap.com/docs/5.0/components/navbar/

class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
        ],
      };
      constructor(){
        super();
        console.log('app - constructor');
      }
      componentDidMount(){
        // ajax call
        //this.setState({ movies });
        console.log('app - mounted');
      }
      // ejemplo que devuelve un array vacio de props al browser
      // constructor (props){
      //   super(props);
      //   console.log('app - constructor', this.props);
      //   this.state=this.props.something;
      //   // no podemos usar setState dentro del constructor
      //  // this.setState();
      // }
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter}; // clonamos el objeto recibido x parametro
        counters[index].value++;
        this.setState({counters});
       // console.log(this.state.counters[index]);
      };
      handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters: counters });
      };
      handleReset = () => {
        const counters = this.state.counters.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counters });
      };
  render(){
    console.log('app - rendered');
  return (
    <React.Fragment>
      <section className='container'>

    <NavBar products={this.props.products} counters={this.state.counters} totalCounters={this.state.counters.filter(c=> c.value>0).length} />

    </section>
    <main className="container">
      <section className='row justify-content-center'>
        <ProductList 
          counters={this.state.counters}
          products={this.props.products}
        ></ProductList>
        <Counters 
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
      </section>
    </main>
    </React.Fragment>
  );
}
}
export default App;