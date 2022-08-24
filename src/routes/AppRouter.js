import React from 'react';
import { useRoutes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Delivery from '../pages/Delivery';

export const routeList = [
    {
      path: '/',
      element: <Layout/>,
      children: [
        {index: true, element: <Home /> , breadcrumb: 'Главная'},
        {path: 'delivery', element: <Delivery/>, breadcrumb: 'Доставка и оплата'},
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