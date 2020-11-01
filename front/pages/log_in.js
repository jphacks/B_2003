import Link from 'next/link'
import Login from '../components/login'

export default () =><div>
    <h1>Log in</h1>
    <div>カメラに顔を映して、ログインボタンを押してください</div>
    <Login/>
    <div>
        <Link href="/member_list">
            <a>メンバーリスト</a>
        </Link>
    </div>
    <div>
        <Link href = "/add_member">
            <a>Add member</a>
        </Link>
    </div>
    <div>
        <Link href = "/confirmation_screen">
            <a>Go confirmation screen</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>