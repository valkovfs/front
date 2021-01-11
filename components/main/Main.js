import avatar from '../../styles/img/avatar.png'
import Image from 'next-images'
import TypingText from "./TypingText";
import Facebook from '../../public/img/facebook.png'
import Github from '../../public/img/github.png'
import Linkedin from '../../public/img/linkedin.png'
import Telegram from '../../public/img/telegram.png'

export default function Main() {

    return (
        <main className="main">
            <TypingText/>
            <div className="main_block">
                <img className="main_img" src={avatar} alt="Me"/>
            </div>
            <div className="socials_block">
                <a href="https://github.com/valkovfs" target="_blank">
                    <img src={Github} alt="" className="socials_block-icon"/>
                </a>
                <a href="https://www.linkedin.com/in/artem-valkov/" target="_blank">
                    <img src={Linkedin} alt="" className="socials_block-icon"/>
                </a>
                <a href="https://www.facebook.com/valkov.artjom" target="_blank">
                    <img src={Facebook} alt="" className="socials_block-icon"/>
                </a>
                <a href="https://t.me/valkov_artyom" target="_blank">
                    <img src={Telegram} alt="" className="socials_block-icon"/>
                </a>
            </div>
        </main>
    )
}
