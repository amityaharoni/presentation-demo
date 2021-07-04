import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Slide from './Slide'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:page" component={Slide}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
