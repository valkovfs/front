import MenuBtn from "./MenuBtn";
import openMenu from "../../redux/actionCreators/menuActionCreator";
import projects from "../../styles/img/projects.svg";
import Router from "next/router";
import signin from '../../styles/img/sign-in.svg'

export default function BurgerButton({menuState, hideMenu, func}) {

    return (
        <div className="menu">
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
        </div>
    )
}
