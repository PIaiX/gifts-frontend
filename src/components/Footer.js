import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Footer(props) {
    return (
        <footer>
            <Container>
                <nav className='mobile'>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.8116 22.3052V27.3335H9.37028C7.89752 27.3335 6.70361 26.1396 6.70361 24.6668V17.3012C6.70361 15.4851 7.61122 13.7892 9.12226 12.7819L14.0465 9.49899C15.3544 8.62703 17.0592 8.63045 18.3636 9.50765L23.2296 12.78C24.7302 13.7891 25.6301 15.4788 25.6301 17.2872V24.6668C25.6301 26.1396 24.4362 27.3335 22.9634 27.3335H19.5154V22.306C19.5154 20.4548 18.0147 18.9541 16.1635 18.9541C14.3123 18.9541 12.8116 20.454 12.8116 22.3052Z" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
                                    <path d="M5 11.5817L12.2439 6.66339C14.6119 5.05558 17.7213 5.05558 20.0894 6.66339L27.3333 11.5817" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/catalog'>
                                <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 25.8334C22.9455 25.8334 25.3333 23.4456 25.3333 20.5001C25.3333 17.5546 22.9455 15.1667 20 15.1667C17.0544 15.1667 14.6666 17.5546 14.6666 20.5001C14.6666 23.4456 17.0544 25.8334 20 25.8334Z" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M24 24.5L28 28.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.33337 8.5H26.6667" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.33337 16.5H10.6667" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5.33337 24.5H10.6667" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/balloons'>
                                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7268 5.4668C25.2626 5.4668 26.0456 5.618 26.8606 6.05384C27.6129 6.45619 28.2105 7.0538 28.6129 7.80614C29.0152 8.5584 29.175 9.28344 29.1972 10.5985L29.1999 10.9399V21.0603L29.1972 21.4017C29.175 22.7168 29.0152 23.4419 28.6129 24.1941C28.2105 24.9465 27.6129 25.5441 26.8606 25.9464L26.6727 26.042C25.9207 26.4046 25.1445 26.5335 23.7268 26.5335H8.27307C6.85536 26.5335 6.07913 26.4046 5.32712 26.042L5.13927 25.9464C4.38693 25.5441 3.78932 24.9465 3.38697 24.1941C2.98466 23.4419 2.82487 22.7168 2.80267 21.4017L2.79993 21.0603V10.9399C2.79993 9.40409 2.95113 8.62109 3.38697 7.80614C3.78932 7.0538 4.38693 6.45619 5.13927 6.05384C5.89153 5.65153 6.61657 5.49174 7.93165 5.46954L8.27307 5.4668H23.7268ZM26.7986 13.2001L26.7999 21.0603C26.7999 22.2339 26.721 22.6426 26.4965 23.0623C26.3179 23.3964 26.0628 23.6514 25.7288 23.8301C25.3413 24.0373 24.9633 24.1205 23.9844 24.132L23.7268 24.1335H8.27307L8.01548 24.132C7.03659 24.1205 6.65854 24.0373 6.2711 23.8301C5.93702 23.6514 5.682 23.3964 5.50332 23.0623C5.27885 22.6426 5.19993 22.2339 5.19993 21.0603L5.19859 13.2001H26.7986ZM8.27307 7.8668H23.7268L23.9844 7.86823C24.9633 7.8798 25.3413 7.96299 25.7288 8.17019C26.0628 8.34887 26.3179 8.60389 26.4965 8.93797C26.7037 9.32541 26.7869 9.70346 26.7985 10.6823L26.7973 10.8001H5.19993L5.20136 10.6823C5.21293 9.70346 5.29612 9.32541 5.50332 8.93797C5.682 8.60389 5.93702 8.34887 6.2711 8.17019C6.69083 7.94572 7.09953 7.8668 8.27307 7.8668Z" fill="currentColor"/>
                                <path d="M7.99992 19.7335C7.99992 19.3601 7.99992 19.1734 8.07258 19.0308C8.1365 18.9054 8.23848 18.8034 8.36392 18.7395C8.50653 18.6668 8.69322 18.6668 9.06659 18.6668H9.59992C9.97329 18.6668 10.16 18.6668 10.3026 18.7395C10.428 18.8034 10.53 18.9054 10.5939 19.0308C10.6666 19.1734 10.6666 19.3601 10.6666 19.7335V20.2668C10.6666 20.6402 10.6666 20.8269 10.5939 20.9695C10.53 21.0949 10.428 21.1969 10.3026 21.2608C10.16 21.3335 9.97329 21.3335 9.59992 21.3335H9.06659C8.69322 21.3335 8.50653 21.3335 8.36392 21.2608C8.23848 21.1969 8.1365 21.0949 8.07258 20.9695C7.99992 20.8269 7.99992 20.6402 7.99992 20.2668V19.7335Z" fill="currentColor"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart'>
                                <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.65792 7.07835C4.54357 7.04515 4.37717 7.03339 3.54529 7.03339H2.66667C2.00393 7.03339 1.46667 6.49613 1.46667 5.83339C1.46667 5.17065 2.00393 4.63339 2.66667 4.63339H3.54529L3.6805 4.63328C4.29699 4.63255 4.83938 4.63191 5.32718 4.77355C6.30073 5.05625 7.10596 5.7435 7.5381 6.66055C7.63186 6.8595 7.70088 7.07276 7.7568 7.30006H24.146L24.181 7.30006C24.7552 7.30005 25.238 7.30004 25.6321 7.32325C26.0389 7.34722 26.4405 7.39931 26.8302 7.54506C28.1584 8.04182 29.1082 9.22578 29.305 10.6301C29.3627 11.0422 29.3264 11.4456 29.2616 11.8478C29.1988 12.2375 29.094 12.7088 28.9694 13.2694L28.9618 13.3036L28.1168 17.1061L28.0837 17.2556C27.8965 18.1002 27.7528 18.7488 27.4613 19.2966C26.8773 20.3939 25.8683 21.2032 24.6705 21.5353C24.0724 21.7011 23.4082 21.7007 22.5431 21.7001L22.3899 21.7001H12.6496L12.4865 21.7001C11.5719 21.7007 10.8707 21.7012 10.2475 21.5202C8.99838 21.1575 7.96526 20.2758 7.41081 19.0992C7.13416 18.5121 7.02445 17.8196 6.88135 16.9162L6.8558 16.7551L5.58629 8.77535C5.45559 7.9538 5.41784 7.79132 5.36708 7.68361C5.22847 7.38947 4.97019 7.16903 4.65792 7.07835ZM8.16358 9.70006L9.22599 16.3781C9.40735 17.518 9.47043 17.8397 9.58183 18.0761C9.84275 18.6298 10.3289 19.0447 10.9167 19.2154C11.1677 19.2883 11.4953 19.3001 12.6496 19.3001H22.3899C23.4799 19.3001 23.7882 19.2894 24.0293 19.2225C24.593 19.0663 25.0678 18.6854 25.3427 18.169C25.4602 17.9481 25.5375 17.6495 25.774 16.5854L26.619 12.783C26.7531 12.1793 26.8419 11.7774 26.8922 11.4659C26.9416 11.1591 26.9374 11.0288 26.9282 10.9632C26.8535 10.4305 26.4933 9.98142 25.9895 9.79299C25.9274 9.76977 25.8011 9.73738 25.4909 9.7191C25.176 9.70055 24.7644 9.70006 24.146 9.70006H8.16358ZM9.33333 26.1667C9.33333 24.8781 10.378 23.8334 11.6667 23.8334C12.9553 23.8334 14 24.8781 14 26.1667C14 27.4554 12.9553 28.5001 11.6667 28.5001C10.378 28.5001 9.33333 27.4554 9.33333 26.1667ZM23 23.8334C21.7113 23.8334 20.6667 24.8781 20.6667 26.1667C20.6667 27.4554 21.7113 28.5001 23 28.5001C24.2887 28.5001 25.3333 27.4554 25.3333 26.1667C25.3333 24.8781 24.2887 23.8334 23 23.8334Z" fill="currentColor"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/account'>
                                <svg viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8 11.1C19.8 9.00027 18.0998 7.30002 16 7.30002C13.9003 7.30002 12.2 9.00027 12.2 11.1C12.2 13.1998 13.9003 14.9 16 14.9C18.0998 14.9 19.8 13.1998 19.8 11.1ZM22.2 11.1C22.2 14.5253 19.4253 17.3 16 17.3C12.5748 17.3 9.80001 14.5253 9.80001 11.1C9.80001 7.67478 12.5748 4.90002 16 4.90002C19.4253 4.90002 22.2 7.67478 22.2 11.1ZM7.86668 25.0714C7.86668 26.0966 7.74565 25.9667 8.31373 25.9667H23.6863C24.2544 25.9667 24.1333 26.0966 24.1333 25.0714C24.1333 22.548 20.4291 21.0334 16 21.0334C11.5709 21.0334 7.86668 22.548 7.86668 25.0714ZM5.46667 25.0714C5.46667 20.6357 10.3637 18.6333 16 18.6333C21.6363 18.6333 26.5333 20.6357 26.5333 25.0714C26.5333 27.3856 25.6193 28.3667 23.6863 28.3667H8.31373C6.38073 28.3667 5.46667 27.3856 5.46667 25.0714Z" fill="currentColor"/>
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Container>
        </footer>
    );
}

export default Footer;