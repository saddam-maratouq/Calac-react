import React, { Component } from 'react'

import './butoon.styles.css'



export class Butoon extends Component { 


    render() {
        return (
         
        <div className='button'> 
              <h1 > 
          <button name="0" onClick={this.props.SelctedNum}> 
            0{" "}
          </button>

          <button name="1" onClick={this.props.SelctedNum}> 
            {" "}
            1{" "}
          </button>

          <button name="2" onClick={this.props.SelctedNum}>
            {" "}
            2{" "}
          </button>

          <button name="3" onClick={this.props.SelctedNum}>
            {" "}
            3{" "}
          </button>
          <button name="4" onClick={this.props.SelctedNum}>
            {" "}
            4{" "}
          </button>
          <button name="5" onClick={this.props.SelctedNum}>
            {" "}
            5{" "}
          </button>
          <button name="6" onClick={this.props.SelctedNum}>
            {" "}
            6{" "}
          </button>
          <button name="7" onClick={this.props.SelctedNum}>
            {" "}
            7{" "}
          </button>
          <button name="8" onClick={this.props.SelctedNum}>
            {" "}
            8{" "}
          </button>
          <button name="9" onClick={this.props.SelctedNum}>
            {" "}
            9{" "}
          </button>
        </h1>

        <button name='+' onClick={this.props.SelctedNum}> + </button>
        <button name='-' onClick={this.props.SelctedNum}> - </button>
        <button name='*' onClick={this.props.SelctedNum}> x </button>
        <button name='/' onClick={this.props.SelctedNum}> &divide; </button>
        <button name="." onClick={this.props.SelctedNum}>  .  </button>
        <button name="Ac" onClick={this.props.SelctedNum}>  Ac  </button>
        <button name='=' onClick={this.props.SelctedNum}> = </button> 
            </div>
        )
    }
}

export default Butoon;
