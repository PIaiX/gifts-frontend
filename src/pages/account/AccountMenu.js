import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import useIsMobile from '../../hooks/isMobile'
import { NavLink } from 'react-router-dom'
import { FiUser, FiMapPin, FiCreditCard, FiBell, FiLogOut, FiShoppingBag, FiHelpCircle, FiXCircle } from "react-icons/fi"
import {ReactComponent as VK} from '../../styles/imgs/VK.svg'
import {ReactComponent as Telegram} from '../../styles/imgs/Telegram.svg'
import {ReactComponent as Whatsapp} from '../../styles/imgs/whatsapp.svg'
import {ReactComponent as Online} from '../../styles/imgs/online.svg'

export default function AccountMenu() {
    const {mobile} = useIsMobile();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        {
            (mobile)
            && <>
                <div className='user'>
                    <div>С</div>
                    <h2 className='mb-0'>Сергей</h2>
                </div>
                
                <figure className='bonus-card max mb-4'>
                    <img src='imgs/bonus-card.svg' alt='bonus-card'/>
                    <figcaption>
                        <div>
                            <div className='num'>0</div>
                            <div className='text'>БАЛЛОВ</div>
                        </div>
                        <button type='button' onClick={handleShow}>
                            <img src='imgs/qr.png' alt='qr'/>
                        </button>
                    </figcaption>
                </figure>
            </>
        }
        <nav className="box p-4 account-nav">
            <ul>
                <li>
                    <NavLink to='profile'>
                        <FiUser/>
                        <span>Личные данные</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='addresses'>
                        <FiMapPin/>
                        <span>Адреса доставки</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='history'>
                        <FiShoppingBag/>
                        <span>История заказов</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='bonus'>
                        <FiCreditCard/>
                        <span>Баллы</span>
                    </NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to='notifications'>
                        <FiBell/>
                        <span>Уведомления</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='support'>
                        <FiHelpCircle/>
                        <span>Служба поддержки</span>
                    </NavLink>
                </li>
                <hr/>
                <li>
                    <button type='button'>
                        <FiLogOut/>
                        <span>Выход</span>
                    </button>
                </li>
            </ul>
        </nav>
        {
            (mobile)
            && <ul className='social-list list-unstyled mt-4'>
                <li><a href='/'><VK/></a></li>
                <li><a href='/'><Telegram/></a></li>
                <li><a href='/'><Whatsapp/></a></li>
                <li><a href='/'><Online className='w2'/></a></li>
            </ul>
        }
        
        <Modal show={show} onHide={handleClose}>
            <button type="button" className='btn-close' onClick={handleClose}>
                <FiXCircle />
            </button>
            <Modal.Body>
                <figure className='qr'>
                    <figcaption>
                        <h5 className='mb-2'>Ваш уникальный</h5> 
                        <h2 className='text-center fw-7 mb-0'>QR-код</h2>
                    </figcaption>
                    <img src="imgs/qr.png" alt="qr"/>
                </figure>
                <button className='btn-1 px-5 mx-auto mt-4' onClick={handleClose}>Назад</button>
            </Modal.Body>
        </Modal>
        </>
    )
}