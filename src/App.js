import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Adduser from "./Components/Adduse/Adduser";
import Hader from "./Components/Adduse/Hader/Hader";
import Home from './Components/Adduse/Home/Home';
import Users from './Components/Adduse/Users/Users';
import UpdateUser from './Components/Adduse/Updateuser/UpdateUser';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Hader></Hader>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/Adduser">
              <Adduser></Adduser>
            </Route>
            
            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
