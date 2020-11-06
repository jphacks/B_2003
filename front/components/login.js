import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Webcam from 'react-webcam';
import Showmember from './showmember';
import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends Component {

    constructor(props) {
        super(props);
    }

    setRef = webcam => {
        this.webcam = webcam;
    }

    capture = () => {

        const img = this.webcam.getScreenshot()
        //console.log(img)

        const start = img.indexOf(',') + 1
        const faceid = img.slice(start)
        //console.log(faceid)

        const method = "POST";
        const body1 = JSON.stringify({face_photo: faceid, facilityID: this.props.facilityID});
        console.log(this.props);

        const promise = new Promise((resolve) => {
            fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/recognition/recognition',{method: "POST",body: body1})
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
                resolve(responseJson);
                //location.href = "/log_in";
            })
            .catch((error) =>{
                window.alert("認識時にエラーが起きました。もう一度入力してください。")
                //location.href = "/log_in"
                //console.error('error');
            });
        });
        

        
        promise.then(() => {
            const body2 = JSON.stringify({name:this.props.name,password_token:this.props.password_token,});
            const dom = document.getElementById('showmember')
            console.log(body2);
            fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/get_number/get_number',{method: "POST",body: body2})
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.result == 1){
                    //メンバーリスト更新
                    console.log(responseJson)
                    console.log(responseJson.name)

                    ReactDOM.render(<Showmember memberlist = {responseJson.name}/>, dom)
                    
                }else{
                    window.alert("グループ名またはグループパスワードが間違っています。もう一度入力してください。")
                }
            })
            .catch((error) =>{
                window.alert("閲覧時にエラーが起きました。もう一度入力してください。")
                //location.href = "/member_list"
                //console.error('error');
            });
        });

        
    }
       
    render (){
        const videoConstraints = {
            width : 1280,
            height : 720,
            facingMode : "user"
        }

        return (
        <div className='text-center'>
        <p><h1>Log in</h1></p>
        <p>　</p>
        <p><div><h4>カメラに顔を映して、ログインボタンを押してください</h4></div></p>
        <p><div><Webcam
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{videoConstraints}}
            onUserMediaError={() => window.alert('cant access your camera')}
        /></div>
            <Button variant="dark" onClick = {this.capture}>撮影</Button>
        </p>
        <div id = "showmember"/>
        
        </div>)
    };
};

export default Login;