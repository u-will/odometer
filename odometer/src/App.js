import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header text="header text"/>
      <Odometer/>
      <Footer trademark="Tracking Mileage"/>
    </div>
  );
}

function Header(props){
  return <h2>{props.text}</h2>
}

class Odometer extends React.Component{

  constructor(props){
    super(props);
    this.state={
      mileage:0,
    }
  }

  addMiles(num){
    let newMileage = this.state.mileage + num;
    if (newMileage >= 10000){
      newMileage = newMileage % 1000;
    }
    this.setState({
      mileage: newMileage
    })
  }

  render(){
    return (
        <section>
          {/* in line 42, we are using the "padStart"function to how many 0 we wanna have in our odometer (aparently the padstart only work with string) */}
          <h2>Mileage:{this.state.mileage.toString().padStart(4,"0")}</h2>
          <button onClick={()=>this.addMiles(1)}>Add 1</button>
          <button onClick={()=>this.addMiles(10)}>Add 10</button>
          <button onClick={()=>this.addMiles(100)}>Add 100</button>
          <button onClick={()=>this.addMiles(1000)}>Add 1000</button>
        </section>
    );
  }
}

function Footer(props){
  return <small>{props.trademark}</small>
}
export default App;
