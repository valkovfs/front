import avatar from '../../styles/img/avatar.png'
import Image from 'next-images'
import TypingText from "./TypingText";

export default function Main() {

    return (
        <main className="main">
            <TypingText/>
            <div className="main_block">
                <img className="main_img" src={avatar} alt="Me"/>
            </div>
        </main>
    )
}
