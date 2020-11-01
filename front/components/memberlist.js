import React, { Component } from 'react';
import Link from 'next/link'

export default class Memberlist extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <h1>Member list</h1>
            <div>閲覧したいグループ名とそのパスワードを入力してください</div>
            <label>
                <p>グループ名:<input type="text" name="group_name" required></input></p>
                <p>パスワード:<input type="text" name="password" required></input></p>
            </label>
            <input type="submit" value="メンバーを閲覧"></input>
            <div>
                <Link href="log_in">
                    <a>顔認証</a>
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