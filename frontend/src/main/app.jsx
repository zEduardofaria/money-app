import React from 'react'
import '../commom/template/dependencies'


import Header from '../commom/template/header'
import SideBar from '../commom/template/sideBar'
import Footer from '../commom/template/footer'
import Routes from './routes'
import Messages from '../commom/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>    
)