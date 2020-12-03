import Link from 'next/link'
import {useSelector, useDispatch} from "react-redux";
import openMenu from "../../redux/actionCreators/menuActionCreator";
import MenuButton from "./menu/MenuButton";

export default function Header({request, signout, signin, home, func}) {
    const menuState = useSelector(state => state.menuReducer)
    console.log('menu', menuState)
    const changeMenuState = useDispatch()

    return (
        <header className="header">
            <div className="header_menu" onClick={() => changeMenuState(openMenu(!menuState))}>

               <MenuButton menuState={menuState} />
                <Link href="/">
                    <div className="header_logo">VALKOV.DEV</div>
                </Link>
            </div>
            {/*<Link href="/request" ><button className="header_button" hidden={request}>Отправить заявку</button></Link>*/}
            <Link href="/">
                <button className="header_button" hidden={signout} onClick={func}>Выйти</button>
            </Link>
            <Link href="/login">
                <button className="header_button" hidden={signin}>Войти</button>
            </Link>
            <Link href="/">
                <button className="header_button" hidden={home}>На главную</button>
            </Link>
        </header>
    )
}
