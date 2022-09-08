import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import AccountLayout from '../pages/account/AccountLayout';

import AccountMenu from '../pages/account/AccountMenu';
import UserProfile from '../pages/account/UserProfile';


const AccountRouter = ({isMobile}) => {
    return (
        <Routes>
            <Route path="/" element={<AccountLayout isMobile={isMobile}/>}>
                {isMobile
                    ? <Route index element={<AccountMenu />} />
                    : <Route index element={<Navigate to="profile" replace={true} />} />
                }
                <Route path="profile" element={<UserProfile/>}/>
                <Route path="history" element={<UserProfile/>}/>
                <Route path="addresses" element={<UserProfile/>}/>
                <Route path="addresses/add" element={<UserProfile />}/>
                <Route path="addresses/edit" element={<UserProfile />}/>
                <Route path="bonus-card" element={<UserProfile/>}/>
            </Route>
            <Route path="history/order" element={<UserProfile/>}/>
        </Routes>
    );
};

export default AccountRouter;