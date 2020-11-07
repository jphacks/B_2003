import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Showcsv extends Component {

    constructor(props) {
        super(props);
        this.handlesubmit = this.handlesubmit.bind(this);
    }

    handlesubmit(e){
        e.preventDefault();

        const method = "POST";
        const body = JSON.stringify({name: this.props.name, password: this.props.password, facilityID:this.props.facilityID, starttime:timeinfo.starttime.value,endtime:timeinfo.endtime.value});
        
        console.log(body);
       
        fetch('https://9dlsqbzy25.execute-api.eu-west-1.amazonaws.com/list_get/list_get',{method: "POST",body: body})
        .then((response) => response.json())
        .then((responseJson) => {
        //console.log(responseJson);
            if(responseJson.result == 0){
                window.alert("入力形式が間違っています")
            }else{
                console.log(responseJson.list)

                let head = [];
                head.push(<tr key={0}>
                    <th>name</th>
                    <th>email_address</th>
                    <th>affiliation</th>
                    <th>starttime</th>
                    <th>endtime</th>
                    </tr>);

                console.log(head)

                let result = [];
                for(let i=0;i<responseJson.list.length;i++){
                    result.push(<tr key={i+1}>
                        <td>{responseJson.list[i].name}</td>
                        <td>{responseJson.list[i].email_address}</td>
                        <td>{responseJson.list[i].affiliation}</td>
                        <td>{responseJson.list[i].starttime}</td>
                        <td>{responseJson.list[i].endtime}</td>
                        </tr>);
                }

                console.log(result)

                const dom = document.getElementById('memberinfo')

                ReactDOM.render(<table><thead>{head}</thead><tbody>{result}</tbody></table>,dom)
            }
        })
      .catch((error) =>{
        window.alert("閲覧時にエラーが起きました。もう一度入力してください。")
        //location.href = "/add_member"
        //console.error('error');
      });
    }

    render(){
        return (<div>
            <h1>View member detail</h1>
            <div>調べたい時間帯の始まりと終わりを入力してください</div>
            <form id="timeinfo" onSubmit={this.handlesubmit}>
                <p>始まり:<input type="datetime-local" name="starttime" required></input></p>
                <p>終わり:<input type="datetime-local" name="endtime" required></input></p>

                <button type="submit">閲覧</button>
            </form>

            <div id="memberinfo"/>
        </div>)
    }
}