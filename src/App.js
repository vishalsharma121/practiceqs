import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import Footer from './components/Footer/Footer';
import Registration from './components/registration/registration';

function App() {
  return (
   <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/registration" component={Registration} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
