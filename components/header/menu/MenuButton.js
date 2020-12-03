import {useSelector, useDispatch} from "react-redux";

export default function MenuButton({menuState}) {

    return (
        <>
            {!menuState
                ? <label htmlFor="header_button--menu">
                    <span className="bar top"></span>
                    <span className="bar middle"></span>
                    <span className="bar bottom"></span>
                </label>
                : <label htmlFor="header_button--menu">
                    <span className="bar top-tr"></span>
                    <span className="bar middle-tr"></span>
                    <span className="bar bottom-tr"></span>
                </label>
            }
        </>
    )
}
