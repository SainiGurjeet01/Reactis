import { Component } from "react";

class App extends Component{

  sayHello =()=>{
    window.alert("Hello Friends");
  }
  render(){
    let x= 404;
    let fruitList = ["Mango","Grapes","Banana","peeku","Apple"];
    let status = true;
    return <div>
      <h1>{x}</h1>
      {fruitList.map((items,index)=><h1>{items}</h1>)}
      {status ? <h1>Hello</h1> : <h1>hii</h1>}
      <button onClick={this.sayHello}>Say Hello</button>
    </div>
  }
}

export default App;
