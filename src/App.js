import React, { Component } from 'react' 
import Numbers from './component/Numbers';
import Outbut from './component/Outbut'; 
import './App.css'


export class App extends Component { 

 constructor() {
   super()
 
   this.state = {
      
    total : ''
   }

 } 

/////////////////////////////////////
 

 SelctedNum = (butoon) => {
    if (butoon ==='=') {
      this.calc()
    }


    else if (butoon === 'Ac') {
      this.reset() 
    }
    
   else {

     this.setState({
       total : this.state.total + butoon 
     })
   }

 }

//////////////////////////////////// 


reset = () => {

  this.setState({
    total : ''
  })
}

calc = () => {
  this.setState({
    total : eval(this.state.total) 
  })
  console.log(this.state.total);
}





 
  render() {
    return (
     
     <div>
      <h1> Small calcloation  </h1> 

      <Outbut  result ={this.state.total} />
      
     <Numbers  SelctedNum={this.SelctedNum} />  
               
     
    </div>
     
    )
  }
}

export default App;
