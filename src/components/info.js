import React from 'react';
import NameConfidence from './nameconfidence'

class Info extends React.Component{

    
    constructor(props) {    
        super(props);
        this.state = {
          tags: [ "outdoor", "city", "building", "photo", "white", "large", "background", "black", "sitting", "tall", "skyscraper", "water", "river", "park", "boat", "street", "field", "parked", "computer", "group" ],
          objects: [ { "rectangle": { "x": 78, "y": 268, "w": 44, "h": 62 }, "object": "building", "confidence": 0.653 }, { "rectangle": { "x": 384, "y": 51, "w": 66, "h": 312 }, "object": "building", "confidence": 0.737 }, { "rectangle": { "x": 39, "y": 315, "w": 107, "h": 128 }, "object": "building", "confidence": 0.543 }, { "rectangle": { "x": 246, "y": 263, "w": 61, "h": 198 }, "object": "building", "confidence": 0.694 }, { "rectangle": { "x": 473, "y": 297, "w": 127, "h": 165 }, "object": "building", "confidence": 0.847 } ],
          captions: [ { "text": "a black and white photo of a city", "confidence": 0.958241045 } ],
          keywords: [ { "name": "sky", "confidence": 0.998601139 }, { "name": "outdoor", "confidence": 0.9967468 }, { "name": "city", "confidence": 0.9352678 }, { "name": "white", "confidence": 0.728594542 }, { "name": "skyscraper", "confidence": 0.233053252 }, { "name": "skyline", "confidence": 0.233053252 }, { "name": "black and white", "confidence": 0.1251363 }, { "name": "building", "confidence": 0.09543502 }, { "name": "cityscape", "confidence": 0.0435244031 }, { "name": "downtown", "confidence": 0.0275768377 } ],
          categories: [ { "name": "building_", "score": 0.2734375 }, { "name": "building_street", "score": 0.26171875 }, { "name": "outdoor_city", "score": 0.2578125 } ],
          bgColor: "white",
          frontColor: "grey",
          accentColor: "#303030"
        };
      }


    render(){
        const tagsList = this.state.tags
            .map(tag => <div className="tag">{tag}</div> );
        const captions = ""
        const keywords = ""
        const categories = ""
        const colors = ""
        return (
            <div id="info">
                <h3 id="infoTitle">Info</h3>

                <h4>Tags</h4>
                <div id="tagsList">
                    {tagsList}
                </div>

                <h4>Captions</h4>
                <div id="captions">
                    {captions}
                </div>

                <h4>Keywords</h4>
                <div id="keywords">
                    {keywords}
                </div>

                <h4>Categories</h4>
                <div id="categories">
                    {categories}
                </div>

                <h4>Colors</h4>
                <div id="cplors">
                    {colors}
                </div>

            </div>
        )
    }
  }
  
  export default Info;