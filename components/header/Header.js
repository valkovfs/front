import Link from 'next/link'

export default function Header({request, signout, signin,home, func}) {

    return (
            <header className="header">
                <Link href="/"><div className="header_logo">KIDS-IT</div></Link>
                <Link href="/request" ><button className="header_button" hidden={request}>Отправить заявку</button></Link>
                <Link href="/" ><button className="header_button" hidden={signout} onClick={func}>Выйти</button></Link>
                <Link href="/login" ><button className="header_button" hidden={signin} >Войти</button></Link>
                <Link href="/" ><button className="header_button" hidden={home} >На главную</button></Link>
            </header>
    )
}
