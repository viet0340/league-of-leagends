import Images from 'components/images';
import Login from 'components/Header/Login';
import Champions from 'features/Champions';
import Home from 'features/Home';
import Items from 'features/Items';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import store from './components/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/champions' component={Champions} />
          <Route exact path='/items' component={Items}></Route>
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
      <div className='background-banner'>
        <img src={Images.WALLPAPER} alt='' />
      </div>
    </Provider>
  );
}

export default App;
