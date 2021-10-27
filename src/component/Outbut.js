import React, { Component } from 'react' 
import './Outbut.styles.css' 

export class Outbut extends Component {
    render() {
        return (
            <div className="result">
                <p className='total'> {this.props.result}</p>
            </div>
        )
    }
}

export default Outbut ; 
