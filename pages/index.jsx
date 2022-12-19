import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import SpeechManager from "../modules/SpeechManager";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <div className="bg-black">
            <Head>
                <title>Smart assistant</title>
                <meta name="description" content="My virtual assistant" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col max-w-screen-md min-h-screen items-center mx-auto px-6">
                <div className={"flex flex-col items-center w-full mb-10"}>
                    <Image
                        className="w-128 sm:w-96"
                        src="/ia.gif"
                        alt="Next.js Logo"
                        width={820}
                        height={1104}
                        priority={true}
                    />
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl my-0 primary-title text-center">
                        JE VOUS ECOUTE !
                    </div>
                </div>
                <div className="w-full px-3">
                    <div className="flex flex-col">
                        <SpeechManager />
                    </div>
                </div>
            </main>
        </div>
    );
}
