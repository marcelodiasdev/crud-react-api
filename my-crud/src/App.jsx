import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './pages/Post/Post'
import Feed from './pages/Feed/Feed'
import LerMais from './pages/LerMais/LerMais'
import Edit from './pages/Edit/Edit'




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
