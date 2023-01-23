import { Link } from 'react-router-dom'

function Header() {

    return (
        <nav className='nav'>
            <Link to='/'>
                <div>Booklist</div>
            </Link>
        </nav>
    )
}

export default Header