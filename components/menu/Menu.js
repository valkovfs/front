import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link'
import Router from 'next/router'
import openMenu from "../../redux/actionCreators/menuActionCreator";
import projects from '../../styles/img/projects.svg'

const RedirectPage = (page) => {
    Router.push(page)
}


export default function Menu() {

    const menuState = useSelector(state => state.menuReducer)
    const changeMenuState = useDispatch()
    return (
        <div className={menuState ? "menu_open" : "menu_close"}>
            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))}>
                <div
                    onClick={() => RedirectPage('/login')} className="menu_item-link">
                    <p>Home</p>
                    {/*<img className="menu_item-img" src={projects} alt="Home"/>*/}
                    <object data={projects} type="image/svg+xml" className="menu_item-img"></object>
                </div>
            </div>
            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))}>
                <div
                    onClick={() => RedirectPage('/login')} className="menu_item-link">
                    <p>Projects</p>
                    <img className="menu_item-img" src={projects} alt="Home"/>

                </div>
            </div>
            <div className={!menuState ? "menu_item" : "menu_item-hide"}
                 onClick={() => changeMenuState(openMenu(false))} >
                <div
                    onClick={() => RedirectPage('/admin')}className="menu_item-link">
                    <p>Contacts</p>
                    <img className="menu_item-img" src={projects} alt="Home" />

                </div>
            </div>

        </div>
    )
}
