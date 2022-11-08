import React from 'react'
import { Link } from 'react-router-dom'
import Address from '../../components/Address'

export default function Addresses() {
    return (
        <div className='box p-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='mb-0'>Адреса доставки</h1>
                <Link to='add' className='btn-1'>Добавить адрес</Link>
            </div>
            <div className='addresses-box'>
                <Address title='Адрес 1' address='г. Казань, ул. Фучика, д.54, кв.1' />
                <Address title='Адрес 2' address='г. Казань, ул. Фучика, д.54, кв.1' />
                <Address title='Адрес 3' address='г. Казань, ул. Фучика, д.54, кв.1' />
                <Address title='Адрес 4' address='г. Казань, ул. Фучика, д.54, кв.1' />
            </div>
        </div>
    )
}