import openMenu from "../../redux/actionCreators/menuActionCreator";
import Router from 'next/router'

export default function MenuBtn({state, changeState,onClick, pageName, img, hideButton, addStyle}) {
    return (
        <div  hidden={hideButton} className={!state ? "menu_item" : `menu_item-hide ${addStyle}`}
             onClick={{changeState}} >
            <div
                onClick={() => onClick} className="menu_item-link">
                {pageName}
                <img className="menu_item-img" src={img} alt="Home" />

            </div>
        </div>
    )
}