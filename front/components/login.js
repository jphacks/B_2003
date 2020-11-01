import React, { Component } from 'react';
import Webcam from 'react-webcam'

export default class Login extends Component {

    setRef = webcam => {
        this.webcam = webcam;
    }

    capture = () => {
        const img = this.webcam.getScreenshot()
        console.log({img})
    }
       
    render (){
        const videoConstraints = {
            width : 1280,
            height : 720,
            facingMode : "user"
        }

        return (
        <div>
        <Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{videoConstraints}}
            onUserMediaError={() => window.alert('cant access your camera')}
        />
        <button onClick = {this.capture}>撮影</button>
        </div>)
    };
};