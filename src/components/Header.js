import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiUser, FiHeart, FiShoppingCart, FiX } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

function Header(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <header>
            <div className='top'>
                <Container className='d-flex align-items-center justify-content-between h-100'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <span className='fw-3'>Ваш город:</span>
                            <span className='ms-1'>Казань</span>
                        </div>
                        <div className='d-flex align-items-baseline ms-4'>
                            <IoLocationSharp className='main-color'/>
                            <span className='fw-6'>Рашида Вагапова 3</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <button type='button' className='main-color text-decoration-underline me-3'>Заказать звонок</button>
                        <a href='tel:+79653456789' className='fw-6'>+7 (965) 345-67-89</a>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="w-100 d-flex justify-content-between align-items-end">
                    <Link to='/' className='d-none d-md-block me-2 me-xl-4'>
                        <img src='imgs/logo.png' className='logo'/>
                    </Link>
                    <div className='flex-1 d-flex justify-content-between align-items-center'>
                        <button type='button' className='d-none d-lg-block btn-1 me-2 me-xl-4'>
                            <FiMenu className='fs-12'/>
                            <span className='ms-2'>Каталог</span>
                        </button>
                        <form className='search'>
                            <input type='search' placeholder='Поиск по сайту'/>
                            <button type='button'>
                                <FiSearch/>
                            </button>
                        </form>
                        <nav className='menu2'>
                            <ul className='list-unstyled d-flex'>
                                <li className='d-none d-lg-block'>
                                    <button type='button'>
                                        <FiUser className='fs-20'/>
                                        <span>Войти</span>
                                    </button>
                                </li>
                                <li>
                                    <button type='button'>
                                        <FiHeart className='fs-20'/>
                                        <span className='d-none d-lg-block'>Избранное</span>
                                    </button>
                                </li>
                                <li className='d-none d-lg-block'>
                                    <button type='button'>
                                        <FiShoppingCart className='fs-20'/>
                                        <span>Корзина</span>
                                    </button>
                                </li>
                                <li className='d-block d-lg-none'>
                                    <button type='button' onClick={handleClose}>
                                        <FiMenu className='fs-20'/>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                
                <hr/>
                <nav className='main'>
                    <ul>
                        <li><a href="/">Новинки</a></li>
                        <li><a href="/">Акции</a></li>
                        <li><a href="/">Доставка и оплата</a></li>
                        <li><a href="/">Возврат</a></li>
                        <li><a href="/">Новости</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Контакты</a></li>
                    </ul>
                </nav>
            </Container>
        </header>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Body>
                <button type='button' className='close'><FiX/></button>
                <h4>Меню</h4>
                <div className='mb-3'>
                    <span className='fw-3'>Ваш город:</span>
                    <span className='ms-1'>Казань</span>
                </div>
                <div className='d-flex align-items-baseline mb-4'>
                    <IoLocationSharp className='main-color'/>
                    <span className='fw-6 ms-2'>Рашида Вагапова 3</span>
                </div>
                <nav className='mb-4'>
                    <ul>
                        <li><a href="/">Новинки</a></li>
                        <li><a href="/">Акции</a></li>
                        <li><a href="/">Доставка и оплата</a></li>
                        <li><a href="/">Возврат</a></li>
                        <li><a href="/">Новости</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Контакты</a></li>
                        <li><a href="/">Контакты</a></li>
                    </ul>
                </nav>
                <button type='button' className='main-color text-decoration-underline mb-3'>Заказать звонок</button>
                <a href='tel:+79653456789' className='fw-6 fs-13'>+7 (965) 345-67-89</a>
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default Header;