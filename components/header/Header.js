import Link from 'next/link'
import {useSelector, useDispatch} from "react-redux";
import openMenu from "../../redux/actionCreators/menuActionCreator";
import BurgerButton from "../menu/BurgerButton";
import MenuBtn from "../menu/MenuBtn";
import projects from "../../styles/img/projects.svg";
import Router from "next/router";
import signin from '../../styles/img/sign-in.svg'

export default function Header({request, signout, signin, home, func}) {
    const menuState = useSelector(state => state.menuReducer)
    console.log('menu', menuState)
    const changeMenuState = useDispatch()

    return (
        <>
            <header className="header">
                <div className="header_menu">
                        <Link href="/">
                            <p className="header_menu-logo">VALKOV.DEV</p>
                        </Link>
                </div>
                <BurgerButton func={() => changeMenuState(openMenu(!menuState))} menuState={menuState}/>
            </header>
        </>
    )
}
