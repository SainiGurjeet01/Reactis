import { Component } from "react";
import Header from "./components/Header";
import CartContainer from "./components/Cartcontainer";
import Footer from "./components/footer";

class App extends Component{
  render(){
    return <div style={{padding:"0"}} className="container-fluid">
      <Header/>
      <CartContainer/>
      <Footer/>
    </div>
  }
}
export default App;

