import {useSelector, useDispatch} from "react-redux";

export default function MenuButton({menuState, hideMenu, func}) {

    return (
        <>
            {!menuState
                ? <label hidden={hideMenu} onClick={func} className={!menuState ?"burger" : "burger-opened"}>
                    <span className="bar top"></span>
                    <span className="bar middle"></span>
                    <span className="bar bottom"></span>
                </label>
                : <label hidden={hideMenu} onClick={func} className={!menuState ?"burger" : "burger-opened"}>
                    <span className="bar top-tr"></span>
                    <span className="bar middle-tr"></span>
                    <span className="bar bottom-tr"></span>
                </label>
            }
        </>
    )
}
