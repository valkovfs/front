import Link from 'next/link'

export default function Header(func) {

    return (
            <header className="header">
                <Link href="/"><div className="header_logo">KIDS-IT</div></Link>
                <Link href="/request"><button className="header_button">Отправить заявку</button></Link>
            </header>
    )
}
