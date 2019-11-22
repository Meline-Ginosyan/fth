import React from "react";
import {BrowserRouter,Link,Route} from "react-router-dom";


const Home = () => (
<div>
  <h2>Home</h2>
  </div>
  );
const About = () => (
  <div>
    <h2>
      About
    </h2>
  </div>
)
const Contacts = () => (
  <div>
    <h2>
    Contacts
    </h2>
  </div>
)
class Navigation extends React.Component{
  render(){
    return(
      <BrowserRouter >
<div>
  <ul>
    <li>
      <Link to = "/">Home</Link>
      </li>
    <li>
      <Link to = "/About">About</Link>
      </li>
    <li>
      <Link to = "/Contacts">Contacts</Link>
      </li>
  </ul>

  <hr>
  </hr>

  <Route exact path = "/" component = {Home}
  
  
  />
  <Route path = "/About" component = {About}
  
  
  />
  <Route path = "/Contacts" component = {Contacts}
  />
  
</div>
      </BrowserRouter>
    )
  };
};

export default Navigation;

