import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import Balloons from '../pages/Balloons'
import Delivery from '../pages/Delivery'
import Returns from '../pages/Returns'
import Contacts from '../pages/Contacts'
import AllNews from '../pages/AllNews'
import News from '../pages/News'
import About from '../pages/About'
import Catalog from '../pages/Catalog'
import Category from '../pages/Category'
import ProductList from '../pages/ProductList'
import Product from '../pages/Product'
import ShoppingCart from '../pages/ShoppingCart'
import Checkout from '../pages/Checkout'
import Favorites from '../pages/Favorites'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import Registration from '../pages/Registration'
import Account from '../pages/account/Account'
import AllOffers from '../pages/AllOffers'
import Offer from '../pages/Offer'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="returns" element={<Returns />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="offers" element={<AllOffers />} />
            <Route path="offers/offer" element={<Offer />} />
            <Route path="all-news" element={<AllNews />} />
            <Route path="all-news/news" element={<News />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/category" element={<Category />} />
            <Route path="catalog/category/list" element={<ProductList />} />
            <Route path="catalog/category/list/product" element={<Product />} />
            <Route path="balloons" element={<Balloons />} />
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="cart/checkout" element={<Checkout />} />
            <Route path="registration" element={<Registration />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="account/*" element={<Account />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
