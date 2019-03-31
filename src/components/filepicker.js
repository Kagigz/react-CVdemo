import React from 'react';
import Dropzone from 'react-dropzone-uploader';

class FilePicker extends React.Component{
   

    render(){
        return (
        <Dropzone
            multiple={false}
            onSubmit={this.props.handleSubmit}
            maxFiles={1}
            accept="image/*"
            inputContent={(files, extra) => (extra.reject ? 'Image files only' : 'Drag Files')}
            styles={{
                dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
            }}
        />
        )
    }
  }
  
  export default FilePicker;