import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () =><div className='text-center'>
    <p><h1>Member</h1></p>
    <p>　</p>
    <p><div><h2>"サービス名"へようこそ</h2></div></p>
    <p><div><h4>未登録の方は新規登録、活動中のメンバーを閲覧したい方はメンバーリストを押してください</h4></div></p>
    <p><div>
        <Link href = "/add_member">
            <a className="btn btn-primary"><font size="5">新規登録</font></a>
        </Link>
    </div></p>
    <p><div>
        <Link href = "/member_list">
            <a className="btn btn-success"><font size="5">メンバーリスト</font></a>
        </Link>
    </div></p>
    <div>
        <Link href = "/">
            <a><font size="4">Go Home</font></a>
        </Link>
    </div>
</div>