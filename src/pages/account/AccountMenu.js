import { NavLink } from 'react-router-dom';
import { FiUser, FiMapPin, FiCreditCard, FiBell, FiLogOut, FiShoppingBag, FiHelpCircle } from "react-icons/fi";
import { VscHistory, VscSignOut } from "react-icons/vsc";
import { MdLogout, MdOutlineHistory } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GrHistory } from "react-icons/gr";

export default function AccountMenu() {
    return (
        <>
        <h2 className='d-lg-none ms-sm-4 mb-4'>Сергей</h2>
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
                    <NavLink to='history'>
                        <FiCreditCard/>
                        <span>Баллы</span>
                    </NavLink>
                </li>
                <hr/>
                <li>
                    <NavLink to='history'>
                        <FiBell/>
                        <span>Уведомления</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='history'>
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
        </>
    )
}