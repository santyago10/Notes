import React from 'react';
import './App.scss';
import NoteComponent from './components/note.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route} from 'react-router';
import NotFound from './components/not-found.component';

function App() {
  return <div>
    <Router>
      <Switch>
        <Route exact path = "/" component = { NoteComponent }/>
        <Route component = { NotFound }/>
      </Switch>
    </Router>
  </div>
}

export default App;
