import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './pages/post'
import Feed from './pages/feed'
import LerMais from './pages/lerMais'
import Edit from './pages/edit'


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/post" component={Post} />
        <Route path="/lermais" component={LerMais} />
        <Route path="/edit" component={Edit} />

      </Switch>
    </Router>


  )

}

export default App;
