import "../styles/globals.css";
import "regenerator-runtime/runtime";
import ReadAutoProvider from "../modules/Context/ReadAutoContext";
import ReadPersoProvider from "../modules/Context/ReadPersoContext";

export default function App({ Component, pageProps }) {
    return (
        <ReadAutoProvider>
            <ReadPersoProvider>
                <Component {...pageProps} />
            </ReadPersoProvider>
        </ReadAutoProvider>
    );
}
