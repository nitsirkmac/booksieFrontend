import { Link } from 'react-router-dom'
import { Nav } from './appStyles'

function Header() {

    return (
        <Nav className='nav'>
            <Link to='/booksie'>
                <div>Booklist</div>
            </Link>
            <Link to='/booksie/new'>
                <div>Add Book</div>
            </Link>
            <div>Search</div>
        </Nav>
    )
}

export default Header