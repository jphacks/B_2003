import Link from 'next/link'
//import Button from '../node_modules/react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default () =><div className='text-center'>
    <h1>Home</h1>
    <div><h2>Welcome</h2></div>
    <div>
        <Link href = "/group">
            <a>Groups</a>
        </Link>
    </div>
    <div>
        <Link href = "/member">
            <a>Members</a>
        </Link>
    </div>
</div>