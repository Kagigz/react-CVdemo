import React from 'react';

class Prediction extends React.Component{

    
    constructor(props) {    
        super(props);
      }

    render(){
      if(this.props.tag != null && this.props.confidence != null){
        let confidence = Math.floor(this.props.confidence * 100);
        return (
            <span className="prediction">
                <span className="predictionTitle">{this.props.tag}</span> {confidence}%
            </span>
        )
      }
      else{
        return(
          <span></span>
        )
      }
    }
  }
  
  export default Prediction;