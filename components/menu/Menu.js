import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link'
import Router from 'next/router'
import openMenu from "../../redux/actionCreators/menuActionCreator";
import projects from '../../styles/img/projects.svg'
import signin from '../../styles/img/sign-in.svg'
import contacts from '../../styles/img/contacts.svg'
import aboutme from '../../styles/img/about-me.svg'

const RedirectPage = (page) => {
    Router.push(page)
}


export default function Menu() {

    const menuState = useSelector(state => state.menuReducer)
    const changeMenuState = useDispatch()
    return (
        <div className={menuState ? "menu_open" : "menu_close"}>

            <div className={!menuState ? "menu_item sign-in" : "menu_item-hide sign-in"}
                 onClick={() => changeMenuState(openMenu(false))} >
                <div
                    onClick={() => RedirectPage('/login')}className="menu_item-link ">
                    <p>Sign-in</p>
                    <img className="menu_item-img" src={signin} alt="Home" />

                </div>
            </div>


            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))}>
                <div
                    onClick={() => RedirectPage('/')} className="menu_item-link">
                    <p>Home</p>
                    <img className="menu_item-img" src={projects} alt="Home"/>
                </div>
            </div>
            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))}>
                <div
                    onClick={() => RedirectPage('/projects')} className="menu_item-link">
                    <p>Projects</p>
                    <img className="menu_item-img" src={projects} alt="Home"/>

                </div>
            </div>
            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))}>
                <div
                    onClick={() => RedirectPage('/projects')} className="menu_item-link">
                    <p>About me</p>
                    <img className="menu_item-img" src={aboutme} alt="Home"/>


                </div>
            </div>
            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))} >
                <div
                    onClick={() => RedirectPage('/admin')}className="menu_item-link">
                    <p>Contacts</p>
                    <img className="menu_item-img" src={contacts} alt="Home" />

                </div>
            </div>


        </div>
    )
}
