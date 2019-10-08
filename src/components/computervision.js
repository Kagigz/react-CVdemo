import React from 'react';
import UrlUpload from './urlupload';
import ImageView from './imageView';
import Info from './info';
import CustomVision from './customvision'

const request = require('request');

class ComputerVision extends React.Component{

    
    constructor(props) {    
        super(props);
    
        this.state = {
          imgURL:null,
          seeCustomResults:false,
          captions:[],
          keywords:[],
          categories:[],
          tags:[],
          customPredictions:[]
        };
        
        this.computerVisionKey = process.env.REACT_APP_COMPUTER_VISION_KEY;
        this.computerVisionURI = `https://${process.env.REACT_APP_COMPUTER_VISION_REGION}.api.cognitive.microsoft.com/vision/v2.0/analyze`;
        this.customVisionKey = process.env.REACT_APP_CUSTOM_VISION_KEY;
        this.customVisionEndpoint = `https://${process.env.REACT_APP_CUSTOM_VISION_REGION}.api.cognitive.microsoft.com/customvision/v3.0/Prediction/${process.env.REACT_APP_CUSTOM_VISION_PROJECTID}/classify/iterations/Iteration1/url`;
      }

    getInfo = (content,contentType) => {

        const params = {
            'visualFeatures': 'Categories,Description,Tags',
            'details': '',
            'language': 'en'
        };
        
        const options = {
            uri: this.computerVisionURI,
            qs: params,
            body:content,
            headers: {
                'Content-Type': contentType,
                'Ocp-Apim-Subscription-Key' : this.computerVisionKey
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

          try{
            let result = JSON.parse(jsonResponse);
            let description = result['description']
            let captions = description['captions'];
            let categories = result['categories'];
            let keywords = result['tags'];
            let tags = description['tags'];
            this.setState({captions});
            this.setState({categories});
            this.setState({keywords});
            this.setState({tags});
          }
          catch(e){
              console.log(e);
          }

        });

    }

    getCustomTags = (content) => {

        const options = {
            uri: this.customVisionEndpoint,
            body:content,
            headers: {
                'Content-Type': 'application/json',
                'Prediction-Key' : this.customVisionKey
            }
        };
        
        request.post(options, (error, response, body) => {
          if (error) {
            console.log('Error: ', error);
            return;
          }

          let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
          console.log('JSON Custom Response\n');
          console.log(jsonResponse);

          try{
            let result = JSON.parse(jsonResponse);
            let customPredictions = result["predictions"];
            this.setState({customPredictions});
          }
          catch(e){
              console.log(e);
          }
        });

    }
    
    handleOK = (url) => {
        this.setState({imgURL:url});
        let jsonContent =  '{"url": ' + '"' + url + '"}';
        this.getInfo(jsonContent,'application/json');
        this.getCustomTags(jsonContent);
        
    }

    toggleCustomResults = () => {
      this.setState({seeCustomResults:!this.state.seeCustomResults});
    }

    render(){

        let customResults;

        if(this.state.seeCustomResults){
          customResults = <CustomVision predictions={this.state.customPredictions} toggle={this.toggleCustomResults}/>
        }
        else{
          customResults = <div className="seeResults"><button onClick={this.toggleCustomResults} className="btn seeResultsBtn">See custom results</button></div>
        }

        return (
        <div className="container" id="main">
            <UrlUpload handleOK={this.handleOK}/>
            <div className="row" id="imageAnalysis">
                <div className="col-md-9" id="imageViewWrapper">
                    <ImageView imgURL={this.state.imgURL}/>
                </div>
                <div className="col-md-3 scrollbar">
                    <Info captions={this.state.captions} keywords={this.state.keywords} categories={this.state.categories} tags={this.state.tags}/>
                </div>
            </div>

          {customResults}

        </div>
        )
    }
  }
  
  export default ComputerVision;