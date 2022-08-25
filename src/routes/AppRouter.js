import React from 'react';
import { useRoutes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Delivery from '../pages/Delivery';
import Returns from '../pages/Returns';
import Contacts from '../pages/Contacts';
import About from '../pages/About';

export const routeList = [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element: <Home /> , breadcrumb: 'Главная'},
        {path: 'about', element: <About/>, breadcrumb: 'О компании'},
        {path: 'delivery', element: <Delivery/>, breadcrumb: 'Доставка и оплата'},
        {path: 'returns', element: <Returns/>, breadcrumb: 'Возврат'},
        {path: 'contacts', element: <Contacts/>, breadcrumb: 'Контакты'},
        {path: 'catalog', element: <Home/>, breadcrumb: 'Каталог'},
        {path: 'balloons', element: <Home/>, breadcrumb: 'Шары'},
        {path: 'cart', element: <Home/>, breadcrumb: 'Корзина'},
        {path: 'account', element: <Home/>, breadcrumb: 'Личный аккаунт'},
      ],
    },
  ];

export default function AppRouter() {
    const Wrapper = ({ children }) => {
      const {pathname} = useLocation();
      useLayoutEffect(() => document.documentElement.scrollTo(0, 0), [pathname])
      return children
    }
  
    const element = useRoutes(routeList)
  
    return (
      <Wrapper>
        {element}
      </Wrapper>
    );
}