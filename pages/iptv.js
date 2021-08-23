import Head from 'next/head'
import Footer from '../components/Footer'
import ThemeSwitch from './../components/ThemeSwitch'


export default function Iptv() {
    return (
        <div className="dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
            <title>IPTV</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <ThemeSwitch />
            </div>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <a className="text-blue-600" href="/">
                    IPTV!
                </a>
                </h1>

                <p className="mt-5 text-2xl text-gray-400">
                    Saluran IPTV berbasis Web.
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <p className="font-bold py-5 px-12 sm:text-lg md:text-lg lg:text-3xl xl:text-5xl rounded-xl bg-blue-600">
                        https://haafidz.xyz/api/iptv.m3u8
                    </p>
                </div>
            </main>

            <Footer />
    </div>
    )
}