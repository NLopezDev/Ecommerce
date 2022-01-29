import React from 'react';
import { render } from 'react-dom';
import { Component } from 'react/cjs/react.production.min';
import './ItemCount';

function ItemCount() {
    return(
    <p>
<ul>
    <li>Budin de limon</li>
    <li>Budin de banana con nueces</li>
    <li>Budin ingles</li>
    <li>Budin de naranja</li>
</ul>

    </p>
    );
    
export default class ItemCount extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };

        setInterval(() => {
            this.setState({
                contador:this.state.contador + 1
            });
        }, 1000);
    }



render() {
    return(
<div>
<h2>Estado</h2>
<p>this.state.contador</p>
</div>
);
}
}

function ItemCount({ stock, initial,  onAdd }) {
    
   }
   

export default ItemCount;
}