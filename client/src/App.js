import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route path="/" component={LandingPage} />
        <h1>Henry Countries</h1>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
