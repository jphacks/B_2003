import React, { Component } from 'react';
import Webcam from 'react-webcam'

export default class Login extends Component {

    setRef = webcam => {
        this.webcam = webcam;
    }

    capture = () => {

        const img = this.webcam.getScreenshot()
        const facilityID = 1738
        //console.log(img)

        const start = img.indexOf(',') + 1
        const faceid = img.slice(start)

        //console.log(faceid)

        const method = "POST";
        const body = JSON.stringify({face_photo: faceid, facilityID: facilityID});
        console.log(body);

        /*fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/recognition/recognitionr',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
        //console.log(responseJson);
            if(responseJson.result == 0){
                window.alert("再撮影してください")
            }else if(responseJson.result == 1){
                window.alert("人数制限を超えています、管理者と相談してください")
            }else if(responseJson.result == 2){
                window.alert("入場しました")
            }else if(responseJson.result == 3){
                window.alert("退場しました")
            }
            location.href = "/log_in";
        })
        .catch((error) =>{
            window.alert("認識時にエラーが起きました。もう一度入力してください。")
            location.href = "/log_in"
            //console.error('error');
        });
        */
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