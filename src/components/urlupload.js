import React from 'react';

class UrlUpload extends React.Component{
   
    constructor(props) {    
        super(props);
        this.state = {
            url:""
        };
    }


    render(){
        return (
            <div id="urlUpload" className="input-group">
                <input type="text" ref="urlInput" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                <div className="input-group-append">
                <button onClick={ () => this.props.handleOK(this.refs.urlInput.value)} className="input-group-text" id="basic-addon1">OK</button>
                </div>
            </div>
        )
    }
  }
  
  export default UrlUpload;