import "../styles/globals.css";
import "regenerator-runtime/runtime";
import ReadAutoProvider from "../modules/Context/ReadAutoContext";

export default function App({ Component, pageProps }) {
    return (
        <ReadAutoProvider>
            <Component {...pageProps} />
        </ReadAutoProvider>
    );
}
