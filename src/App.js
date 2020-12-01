import React,{ Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Dashboard from './Components/Dashboard/Dashboard'
import ProjectDetails from './Components/Project/ProjectDetail'
import SignIn from './Components/Auth/Signin'
import Signout from './Components/Auth/Signout'
import CreateProject from './Components/Project/CreateProject'
import adminRole from './Components/Project/adminRole'
class App extends Component
{
  render(){
    return(
      <BrowserRouter>
      <div className="App">
          <Navbar />
    <Switch>
<Route exact path='/' component={Dashboard} />
<Route path='/project/:id' component={ProjectDetails} />
<Route path='/SignIn' component={SignIn} />
<Route path='/Signout' component={Signout} />
<Route path='/CreateProject' component={CreateProject} />
<Route path='/adminRole' component={adminRole} />
    </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
