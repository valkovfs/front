
import Loader from 'react-loader-spinner'

export default function CustomLoader() {
    return (
        <div className="loader">
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={60}
                width={60}
                timeout={3000} //3 secs
            />
        </div>
    )
}