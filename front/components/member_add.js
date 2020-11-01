import React, { Component } from 'react';
import Link from 'next/link'

export default class Addmember extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (<div>
            <h1>Add member</h1>
            <div>登録するメンバーの情報を教えてください</div>
            <form>
                <p>名前:<input type="text" name="name" required></input></p>
                <p>メールアドレス:<input type="email" name="email" required></input></p>
                <p>所属:<input type="text" name="affiliation" required></input></p>
                <p>正面を向いた写真:<input type="file" name="picture" required></input></p>
                <input type="submit" value="登録"></input>
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