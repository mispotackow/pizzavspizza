import logo from './logo.svg';
import PizzaList from './pizzerias/pizzeriaslist'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://book.nyc3.digitaloceanspaces.com/pizza.jpg" className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;