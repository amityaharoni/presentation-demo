import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Slide from './Slide'

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
