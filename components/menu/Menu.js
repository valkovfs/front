import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link'
import Router from 'next/router'
import MenuBtn from "./MenuBtn";
import openMenu from "../../redux/actionCreators/menuActionCreator";
import projects from '../../styles/img/projects.svg'
import signin from '../../styles/img/sign-in.svg'
import contacts from '../../styles/img/contacts.svg'
import aboutme from '../../styles/img/about-me.svg'




export default function Menu() {
    function RedirectPage(page){
      return Router.push(page)
    }
    const menuState = useSelector(state => state.menuReducer)
    const changeMenuState = useDispatch()
    return (
        <div className={menuState ? "menu_open" : "menu_close"}>
            <div  hidden={false} className={!menuState ? "menu_item" : `menu_item-hide `}
                  onClick={() => changeMenuState(openMenu(false))} >
                <div
                    onClick={() => Router.push('/')} className="menu_item-link">
                    Home
                    <img className="menu_item-img" src={aboutme} alt="Home" />
                </div>
            </div>
            <div  hidden={false} className={!menuState ? "menu_item" : `menu_item-hide `}
                  onClick={() => changeMenuState(openMenu(false))} >
                <div
                    onClick={() => Router.push('/projects')} className="menu_item-link">
                    Projects
                    <img className="menu_item-img" src={projects} alt="Home" />
                </div>
            </div>
            <div  hidden={false} className={!menuState ? "menu_item" : `menu_item-hide `}
                  onClick={() => changeMenuState(openMenu(false))} >
                <div
                    onClick={() => Router.push('/login')} className="menu_item-link">
                    Login
                    <img className="menu_item-img" src={signin} alt="Home" />
                </div>
            </div>

            {/*<MenuBtn
                state={menuState}
                changeState={() => changeMenuState(openMenu(false))}
                page={'/projects'}
                pageName={<p>Projects</p>}
                img={projects}
                hideButton={false}
            />
            <MenuBtn
                state={menuState}
                changeState={() => changeMenuState(openMenu(false))}
                page={'/about'}
                pageName={<p>About Me</p>}
                img={aboutme}
                hideButton={false}
            />
            <MenuBtn
                state={menuState}
                changeState={() => changeMenuState(openMenu(false))}
                page={'/contacts'}
                pageName={<p>Contacts</p>}
                img={contacts}
                hideButton={false}
            />
            <MenuBtn
                state={menuState}
                changeState={() => changeMenuState(openMenu(false))}
                page={'/login'}
                pageName={<p>Sign-in</p>}
                img={signin}
                hideButton={false}
                addStyle={'sign-in'}
            />*/}

        </div>
    )
}
