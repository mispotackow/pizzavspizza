import React, { Component } from 'react';
import PizzaDetail from './pizzeriadetail';
import PizzaForm from './pizzeriaform';
import axios from 'axios'

class PizzaList extends Component {

//  Метод конструктора инициализирует состояние(State) и связывает методы.
//  Метод конструктора будет вызываться перед монтированием компонента.
    constructor(props) {
        super(props);
        this.state = {
            pizzeriasData: [],
            pizzeria: " ",
            showComponent: false,
        };
        this.getPizzaDetail = this.getPizzaDetail.bind(this);
        this.showPizzeriaDetails = this.showPizzeriaDetails.bind(this);
    }

//  Наш метод вызова API будет называться getPizzaDetail и будет принимать экземпляр Pizzeria в качестве аргумента.
//  Используя метод Get Axios, мы извлекаем информацию и устанавливаем эти данные как атрибут компонента PizzaList.

//  Мы передаем экземпляр Pizzeria в метод getPizzaDetail.
//  Item представляет экземпляр, и мы можем получить доступ к его атрибуту absolute_url.
//  Чтобы получить все подробности о pizerria, мы вызываем метод axios.get.
//  Если вызов API успешен, мы можем сохранить полученный ответ как «pizzeria» в State.
    getPizzaDetail(item) {
        axios
            .get("http://127.0.0.1:8000".concat(item.absolute_url))
            .then((response)=> {
                this.setState({ pizzeria: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

//  showPizzeriaDetails, вызовет метод getPizzaDetail и изменит специальный атрибут showComponent на true в тот момент,
//  когда пользователь щелкает определенную Pizzeria. В нашем State мы изначально определили его как ложное.
//  Это гарантирует, что компонент PizzaDetail не будет раскрыт раньше времени.
    showPizzeriaDetails(item){
        this.getPizzaDetail(item);
        this.setState({ showComponent: true });
    }

    componentDidMount(){
        axios
            .get('http://127.0.0.1:8000/')
            .then((response) => {
                this.setState({ pizzeriasData: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

//  Нам нужно будет вызвать метод showPizzeriaDetails с обработчиком события onClick в методе render() и передать объект,
//  по которому был выполнен щелчок, в качестве аргумента. Мы помещаем компонент PizzaDetail в метод render()
//  и передаем детали пиццерии в качестве свойств(props). Условный оператор «?» будет гарантировать, что PizzaDetail
//  вызывается только в том случае, если значение showComponent было изменено на true.
    render(){
        return(
            <div>
                <PizzaForm/>
                {this.state.pizzeriasData.map((item) => {
                return (
                    <h3 key={item.id} onClick={() => this.showPizzeriaDetails(item)}>
                        {item.pizzeria_name}, {item.city}
                    </h3>
                );
            })}

            {this.state.showComponent ? (
                <PizzaDetail pizzeriaDetail={this.state.pizzeria} />
            ) : null}
            </div>

        );
    }
}
export default PizzaList;