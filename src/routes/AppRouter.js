import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider} from 'react-router-dom'
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
        <Route path="/" element={<AppLayout />} handle={{crumb: () => <Link to="/">Главная</Link>}}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} handle={{crumb: () => <Link to="/about">О компании</Link>}} />
            <Route
                path="delivery"
                element={<Delivery />}
                handle={{crumb: () => <Link to="/delivery">Доставка и оплата</Link>}}
            />
            <Route path="returns" element={<Returns />} handle={{crumb: () => <Link to="/returns">Возврат</Link>}} />
            <Route
                path="contacts"
                element={<Contacts />}
                handle={{crumb: () => <Link to="/contacts">Контакты</Link>}}
            />
            <Route path="offers" element={<AllOffers />} handle={{crumb: () => <Link to="/offers">Акции</Link>}} />
            <Route
                path="offers/offer"
                element={<Offer />}
                handle={{crumb: () => <Link to="/offers/offer">Название акции</Link>}}
            />
            <Route
                path="all-news"
                element={<AllNews />}
                handle={{crumb: () => <Link to="/all-news">Новости</Link>}}
            />
            <Route
                path="all-news/news"
                element={<News />}
                handle={{crumb: () => <Link to="/all-news/news">Название новости</Link>}}
            />
            <Route
                path="favorites"
                element={<Favorites />}
                handle={{crumb: () => <Link to="/favorites">Избранное</Link>}}
            />
            <Route path="catalog" element={<Catalog />} handle={{crumb: () => <Link to="/catalog">Каталог</Link>}} />
            <Route
                path="catalog/category"
                element={<Category />}
                handle={{crumb: () => <Link to="/catalog/category">Категория</Link>}}
            />
            <Route
                path="catalog/category/list"
                element={<ProductList />}
                handle={{crumb: () => <Link to="/catalog/category/list">Список товаров</Link>}}
            />
            <Route
                path="catalog/category/list/product"
                element={<Product />}
                handle={{crumb: () => <Link to="/catalog/category/list/product">Товар</Link>}}
            />
            <Route path="balloons" element={<Balloons />} handle={{crumb: () => <Link to="/balloons">Шары</Link>}} />
            <Route path="cart" element={<ShoppingCart />} handle={{crumb: () => <Link to="/cart">Корзина</Link>}} />
            <Route
                path="cart/checkout"
                element={<Checkout />}
                handle={{crumb: () => <Link to="/cart/checkout">Оформление заказа</Link>}}
            />
            <Route
                path="registration"
                element={<Registration />}
                handle={{crumb: () => <Link to="/registration">Регистрация</Link>}}
            />
            <Route
                path="login"
                element={<Login />}
                handle={{crumb: () => <Link to="/login">Вход в личный кабинет</Link>}}
            />
            <Route
                path="reset-password"
                element={<ResetPassword />}
                handle={{crumb: () => <Link to="/reset-password">Восстановление пароля</Link>}}
            />
            <Route
                path="account/*"
                element={<Account />}
                handle={{crumb: () => <Link to="/account">Личный аккаунт</Link>}}
            />
            <Route
                path="*"
                element={<NotFound />}
                handle={{crumb: () => <Link to="*">Страница не найдена 404</Link>}}
            />
        </Route>
    )
)

const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
