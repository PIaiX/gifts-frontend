import React from 'react';
import { Outlet } from 'react-router-dom'
import AccountMenu from './AccountMenu';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AccountLayout = ({isMobile}) => {
    return <>
        {   
            isMobile
            ? <Outlet/>
            : <Row className='gx-5'>
                <Col md={3}>
                    <AccountMenu/>
                </Col>
                <Col md={9}>
                    <Outlet/>
                </Col>
            </Row>
        }
    </>

};

export default AccountLayout;