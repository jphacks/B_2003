import Link from 'next/link'
//import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default () =><div className='text-center'>
    <p><h1>Home</h1></p>
    <p>　</p>
    <p><div><h2>"サービス名"へようこそ</h2></div></p>
    <p><div><h4>団体でのログイン、新規登録の方はGroups,個人の方はMembersをクリックしてください</h4></div></p>
    <p><div>
        <Link href = "/group">
            <a className="btn btn-primary" role="button"><font size = "5">Groups</font></a>
        </Link>
    </div></p>
    <p><div>
        <Link href = "/member">
            <a className="btn btn-success" role="button"><font size="5">Members</font></a>
        </Link>
    </div></p>
</div>