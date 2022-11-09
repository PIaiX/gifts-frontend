import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { IoBalloonOutline } from "react-icons/io5"
import {ReactComponent as Home} from '../styles/imgs/home.svg'
import {ReactComponent as Catalog} from '../styles/imgs/catalog.svg'
import {ReactComponent as Cart} from '../styles/imgs/cart.svg'
import {ReactComponent as Account} from '../styles/imgs/account.svg'

function Footer(props) {
    return (
        <footer>
            <Container>
                <nav className='mobile'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <Home/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/catalog'>
                                <Catalog />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/balloons'>
                                <IoBalloonOutline />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'>
                                <Cart/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/account'>
                                <Account/>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;