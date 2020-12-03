import {useSelector, useDispatch} from "react-redux";
import Link from 'next/link'
import openMenu from "../../redux/actionCreators/menuActionCreator";

export default function Menu() {

    const menuState = useSelector(state => state.menuReducer)
    const changeMenuState = useDispatch()
    return (
        <div className={menuState ? "menu_open" : "menu_close"}>
            <div hidden={!menuState} className="menu_item" onClick={() => changeMenuState(openMenu(false))}> <Link href='/login'> Sign-in </Link></div>
            <div hidden={!menuState} className="menu_item"> Home </div>
            <div hidden={!menuState} className="menu_item"> Home </div>
            <div hidden={!menuState} className="menu_item"> Home </div>
        </div>
    )
}
