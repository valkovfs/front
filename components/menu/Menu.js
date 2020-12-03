import {useSelector, useDispatch} from "react-redux";

export default function Menu() {

    const menuState = useSelector(state => state.menuReducer)
    return (
        <div className={menuState ? "menu_open" : "menu_close"}>

        </div>
    )
}
