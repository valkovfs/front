

export default function Header(func) {

    return (
            <header className="header">
                <a href="/"><div className="header_logo">KIDS-IT</div></a>
                <button func={func} className="header_button">Отправить заявку</button>
            </header>
    )
}
