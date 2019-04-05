import React from 'react';
import FilePicker from './filepicker';
import UrlUpload from './urlupload';
import ImageView from './imageView';
import Info from './info';

const request = require('request');
const subscriptionKey = '';
const uriBase = 'https://westeurope.api.cognitive.microsoft.com/vision/v2.0/analyze';

class ComputerVision extends React.Component{

    
    constructor(props) {    
        super(props);
    
        this.state = {
          imgURL:null
        };
         
      }

    makeRequest = (imageURL) => {

        const params = {
            'visualFeatures': 'Categories,Description,Tags',
            'details': '',
            'language': 'en'
        };
        
        const options = {
            uri: uriBase,
            qs: params,
            body: '{"url": ' + '"' + imageURL + '"}',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        };
        
        request.post(options, (error, response, body) => {
          if (error) {
            console.log('Error: ', error);
            return;
          }
          let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
          console.log('JSON Response\n');
          console.log(jsonResponse);
        });

    }
    
    handleSubmit = (files, allFiles) => {
        URL.revokeObjectURL(this.state.imgURL);
        let newImg = URL.createObjectURL(files[0].file);
        this.setState({imgURL:newImg});
        console.log(newImg);
        this.makeRequest(newImg);
        allFiles.forEach(f => f.remove())
    }

    handleOK = (url) => {
        this.setState({imgURL:url});
        this.makeRequest(url);
    }

    render(){
        return (
        <div className="container" id="main">
            <FilePicker handleSubmit={this.handleSubmit}/>
            <UrlUpload handleOK={this.handleOK}/>
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