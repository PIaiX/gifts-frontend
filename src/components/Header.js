import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";

function Header(props) {
    return (
        <header>
            <div className='top'>
                <Container className='d-flex align-items-center justify-content-between h-100'>
                    <div className='d-flex'>
                        <div>
                            <span>Ваш город:</span>
                            <span className='fw-6'>Казань</span>
                        </div>
                        <div>
                            <span className='fw-6'>Рашида Вагапова 3</span>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <button type='button' className='main-color me-3'>Заказать звонок</button>
                        <a href='tel:+79653456789'>+7 (965) 345-67-89</a>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="d-flex justify-content-between align-items-center pt-4">
                    <Link to='/' className='me-4'>
                        <img src='imgs/logo.png' className='logo'/>
                    </Link>
                    <button type='button' className='btn-1 me-4'>
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
                            <li>
                                <button type='button'>
                                    <FiUser className='fs-20'/>
                                    <span>Войти</span>
                                </button>
                            </li>
                            <li>
                                <button type='button'>
                                    <FiHeart className='fs-20'/>
                                    <span>Избранное</span>
                                </button>
                            </li>
                            <li>
                                <button type='button'>
                                    <FiShoppingCart className='fs-20'/>
                                    <span>Корзина</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
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
    );
}

export default Header;