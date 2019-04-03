import React from 'react';
import FilePicker from './filepicker';
import ImageView from './imageView';
import Info from './info';

class ComputerVision extends React.Component{

    
    constructor(props) {    
        super(props);
    
        this.state = {
          imgURL:null
        };
         
      }
    
    handleSubmit = (files, allFiles) => {
        URL.revokeObjectURL(this.state.imgURL);
        this.setState({imgURL:URL.createObjectURL(files[0].file)});
        allFiles.forEach(f => f.remove())
    }

    render(){
        return (
        <div className="container" id="main">
            <FilePicker handleSubmit={this.handleSubmit}/>
            <div className="row" id="imageAnalysis">
                <div className="col-md-9">
                    <ImageView imgURL={this.state.imgURL}/>
                </div>
                <div className="col-md-3 scrollbar">
                    <Info/>
                </div>
            </div>
        </div>
        )
    }
  }
  
  export default ComputerVision;