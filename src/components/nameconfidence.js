import React from 'react';

class NameConfidence extends React.Component{

    
    constructor(props) {    
        super(props);
      }


    render(){
      if(this.props.name != null && this.props.confidence != null){
        let confidence = Math.round(this.props.confidence * 100);
        return (
            <div className="nameConfidence">
                <div className="nameConfidenceTitle">{this.props.name}</div>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: confidence + '%'}} aria-valuenow={confidence} aria-valuemin="0" aria-valuemax="100">{confidence}%</div>
                </div>
            </div>
        )
      }
      else{
        return (
          <div></div>
        )
      }
    }
  }
  
  export default NameConfidence;