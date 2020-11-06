import React, { Component } from 'react';
import Webcam from 'react-webcam'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../node_modules/react-bootstrap/Button';
//import Image from 'next/image';

export default class Addmember extends Component {

    constructor(props) {
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this);
        this.state = {
            faceid : '',
        }
    }

    setRef = webcam => {
        this.webcam = webcam;
    }

    capture = () => {

        const img = this.webcam.getScreenshot()
        console.log(img)
        //console.log(img)

        const start = img.indexOf(',') + 1
        this.state.faceid = img.slice(start)

        document.getElementById('faceimg').src = img;
    }

    handlesubmit(e){
        e.preventDefault();

        const method = "POST";
        const body = JSON.stringify({name: new_member.name.value,email_address: new_member.email_address.value,affilitian: new_member.affilitian.value,face_photo: this.state.faceid,});
        
        console.log(body);
       
        fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/register_user/register_user',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
        //console.log(responseJson);
            if(responseJson.result == 0){
                window.alert("このメールアドレスはすでに登録されています。")
                location.href = "/add_member"
            }else if(responseJson.result == 1){
                window.alert("顔認証に失敗しました。もう一度顔がはっきりわかるような写真を提出してください。")
                location.href = "/add_member"
            }else{
                window.alert("登録が完了しました！")
                location.href = "/member_list"
            }
        })
      .catch((error) =>{
        window.alert("登録時にエラーが起きました。もう一度入力してください。")
        location.href = "/add_member"
        //console.error('error');
      });
    }

    render(){
        const videoConstraints = {
            width : 1280,
            height : 720,
            facingMode : "user"
        }

        return (<div className="text-center">
            <p><h1>Add member</h1></p>
            <p>　</p>
            <p><div><h2>FaceAppへようこそ</h2></div></p>
            <p><div><h4>登録するメンバーの情報を教えてください</h4></div></p>
            <p><div><Webcam
                        audio={false}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{videoConstraints}}
                        onUserMediaError={() => window.alert('cant access your camera')}
                    />
                    <img id="faceimg" src=""></img>
                </div>
                <Button variant="dark" onClick = {this.capture}>撮影</Button>
            </p>
            <p><form id="new_member" onSubmit={this.handlesubmit}>
                <p>名前:　<input type="text" name="name" placeholder="Name" required></input></p>
                <p>メールアドレス:　<input type="email" name="email_address" placeholder="Email" required></input></p>
                <p>所属:　<input type="text" name="affilitian" placeholder="Affiliation" required></input></p>
                <Button type="submit" variant = "info">新規登録</Button>
            </form></p>
            <div>
                <Link href = "/member_list">
                    <a>Member list</a>
                </Link>
            </div>
            <div>
                <Link href = "/">
                    <a>Go Home</a>
                </Link>
            </div>
        </div>)
    }
}