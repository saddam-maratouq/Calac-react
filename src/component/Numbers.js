import React, { Component } from "react";
import Butoon from "./Butoon";

class Numbers extends Component {



  SelctedNum = (e) => {
    this.props.SelctedNum(e.target.name);
  };

  //////////////////////////////////



  render() {
    return (

      <div>
       
    <Butoon SelctedNum={this.SelctedNum}/> 
        
      </div>
    );
  }
}

export default Numbers;
