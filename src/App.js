import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {setPizzas} from './redux/actionCreators/pizzasAC'

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

/* function App() {
  React.useEffect(()=> {
    axios.get('http://localhost:3000/db.json')
    .then(({data}) => {
        setPizzas(data.pizzas)
    })
  },[])
  return 
} */

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={[]} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.pizzas.items
})

const mapDispatchToProps = {
  setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
