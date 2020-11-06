import Link from 'next/link'
import Login from '../components/login'
import 'bootstrap/dist/css/bootstrap.min.css';

export default () =><div className="text-center">
    <Login />
    <div>
        <Link href="/member_list">
            <a>メンバーリスト</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>