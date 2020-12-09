import React, { Component } from 'react';
import DummyData from './dummydata.json';
import PizzaDetail from './pizzeriadetail';

class PizzaList extends Component {
    render(){
        return(
            <div>
                {DummyData.map( item => {
                return <PizzaDetail p = {item}/>

                    })
                }
            </div>
            )
    }
}
export default PizzaList;