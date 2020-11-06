import Link from 'next/link'
import Showmember from '../components/showmember'

export default () =><div>
    <Showmember/>
    <div>
        <Link href = "/member_list">
            <a>メンバーリスト</a>
        </Link>
    </div>
    <div>
        <Link href = "/">
            <a>Go home</a>
        </Link>
    </div>
</div>