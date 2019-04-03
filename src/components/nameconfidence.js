import React from 'react';

class NameConfidence extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
          name: "",
          confidence:0
        };
      }


    render(){

        return (
            <div className="nameConfidence">
                {this.state.name}
                {this.state.confidence}
            </div>
        )
    }
  }
  
  export default NameConfidence;