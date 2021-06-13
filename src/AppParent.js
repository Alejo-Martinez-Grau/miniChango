import React, {useState} from 'react';
import App from './App';

const AppParent = () => {
    
    //initial state, for the exercize there is no need to modify the state with setProducts
    const [products] = useState([
          [1, "Tomate", 80],
          [2, "Papa", 60],
          [3, "Zanahoria", 60],
          [4, "Palta", 200],
        ]);

    return (
        <div>
            <App products={products} className='container' />
        </div>
    );
};

export default AppParent;