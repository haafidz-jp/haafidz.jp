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
            </main>

            <Footer />
    </div>
    )
}