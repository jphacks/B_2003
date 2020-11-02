import React, { Component } from 'react';
import Link from 'next/link'

export default class Addmember extends Component {

    constructor(props) {
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlesubmit(e){
        e.preventDefault();
        const method = "POST";
        const body = JSON.stringify({name: new_member.name.value,email_address: new_member.email_address.value,affiliation: new_member.affiliation.value,face_photo: new_member.picture.value,});
        //console.log(body);
        fetch('https://uzi8fe1wu4.execute-api.eu-west-1.amazonaws.com/register_user/register_user',{method: "POST",body: body})
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
                location.href = "/member_list.js"
            }
        })
      .catch((error) =>{
        window.alert("登録時にエラーが起きました。もう一度入力してください。")
        location.href = "/add_member"
        //console.error('error');
      });
    }

    render(){
        return (<div>
            <h1>Add member</h1>
            <div><h1>"サービス名"へようこそ</h1>登録するメンバーの情報を教えてください</div>
            <form id="new_member" onSubmit={this.handlesubmit}>
                <p>名前:<input type="text" name="name" required></input></p>
                <p>メールアドレス:<input type="email" name="email_address" required></input></p>
                <p>所属:<input type="text" name="affiliation" required></input></p>
                <p>正面を向いた写真:<input type="file" accept="image/*" name="picture" required></input></p>
                <button type="submit">新規登録</button>
            </form>
            <div>
                <Link href = "/member_list">
                    <a>Member list</a>
                </Link>
            </div>
            <div>
                <Link href = "/">
                    <a>Go home</a>
                </Link>
            </div>
        </div>)
    }
}