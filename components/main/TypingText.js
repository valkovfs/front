import Typist from 'react-typist'

export default function TypingText() {
    return (
            <Typist className="typing-text" avgTypingDelay={80} cursor>
                <Typist.Delay ms={1000}/>
                Hello!
                <Typist.Delay ms={1000}/>
                <br />
                My name is Artem Valkov.
                <Typist.Delay ms={1000}/>
                <br />
                I'm Front-en<Typist.Backspace count={8} delay={400} /> Full-stack developer.
            </Typist>
    )
}