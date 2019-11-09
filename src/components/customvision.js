import React from 'react';
import Prediction from './prediction'
const uuid = require('uuid/v1');

class CustomVision extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){

        var predictions = "";
        
        try{
        predictions = this.props.predictions
            .map(item => <Prediction key={uuid()} tag={item.tagName} confidence={item.probability}/>);
        }
        catch(e){
            console.log(e);
        }

        return (
          <div className="row align-middle" id="customVision">
                <div className="col-md-3"><h5>Custom Vision result</h5></div>
                <div className="col-md-8">
                  {predictions}
                </div>
                <button className="btn hideResultsBtn" onClick={this.props.toggle}>X</button>
            </div>
        )
    }
  }
  
  export default CustomVision;