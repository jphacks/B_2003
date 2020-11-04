import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () =><div className='text-center'>
    <p><h1>Group</h1></p>
    <p>　</p>
    <p><div><h2>"サービス名"へようこそ</h2></div></p>
    <p><div><h4>新しくまだアカウントを持っていない団体は新規登録,すでに登録済みの団体はログインを押してください</h4></div></p>
    <p><div>
        <Link href = "/group_log_in">
            <a className="btn btn-primary"><font size="5">ログイン</font></a>
        </Link>
    </div></p>
    <p><div>
        <Link href = "/group_registration">
            <a className="btn btn-success"><font size = "5">新規登録</font></a>
        </Link>
    </div></p>
    <div>
        <Link href = "/">
            <a><font size="4">Go Home</font></a>
        </Link>
    </div>
</div>