import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../../firebase.init';
import profile from '../../../images/profile.png';
import { toast } from 'react-toastify';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        toast.success('Logging out Successful', { id: 'logout' });
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container className="w-75 mx-auto">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand as={Link} to="/">
                                <h2 className='logo-title'><span className='logo'>Gauche</span> Fruit Center</h2>
                            </Navbar.Brand>

                        </Nav>
                        <Nav className='px-1 fs-5'>
                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link as={Link} to="home#about">About</Nav.Link>
                            <Nav.Link as={Link} to="home#blog">Blog</Nav.Link>
                            {
                                user && <>
                                 <Nav.Link as={Link} to="addproduct">Add</Nav.Link>
                                 <Nav.Link as={Link} to="manageproduct">Manage</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}> <img className='profile-img' src={profile} alt="" /></button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;