import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import SpeechManager from "../modules/SpeechManager";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
    return (
        <>
            <Head>
                <title>Smart assistant</title>
                <meta name="description" content="My virtual assistant" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col min-h-screen items-center gap-16 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className={"flex flex-col items-center gap-10 mt-10"}>
                    <h1 className="text-3xl text-yellow-400 font-bold text-shadow-lg">
                        My Virtual Assistant
                    </h1>
                    <Image
                        className=""
                        src="/bot.png"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>

                <div className="">
                    <div className="flex flex-col">
                        <SpeechManager />
                    </div>
                </div>
            </main>
        </>
    );
}
