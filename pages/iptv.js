import Head from 'next/head'


export default function Iptv() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
            <title>IPTV</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <a className="text-blue-600" href="localhost:3000/iptv">
                    IPTV!
                </a>
                </h1>
            </main>

            <footer className="flex items-center justify-center w-full h-20 border-t">
                <a
                className="flex items-center justify-center"
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
                </a>
            </footer>
    </div>
    )
}