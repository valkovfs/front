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
                <Link href={'/'} prefetch={true} className="menu_item-link">Home</Link>
            </div>
            <div  hidden={false} className={!menuState ? "menu_item" : `menu_item-hide `}
                  onClick={() => changeMenuState(openMenu(false))} >
                <Link href={'/projects'} prefetch={true} className="menu_item-link">Projects</Link>
            </div>
            <div  hidden={false} className={!menuState ? "menu_item" : `menu_item-hide `}
                  onClick={() => changeMenuState(openMenu(false))} >
                <Link href={'/login'} prefetch={true} className="menu_item-link">Sign-in</Link>
            </div>
        </div>
    )
}
