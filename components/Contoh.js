import Head from 'next/head'

export default function Contoh() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>haafidz.jp</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <a className="text-blue-600" href="https://haafidz.jp">
                    haafidz.jp
                </a>
                </h1>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="http://localhost:3000/iptv"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">IPTV &rarr;</h3>
                        <p className="mt-4 text-xl">
                        IPTV API.
                        </p>
                    </a>

                    <a
                        href="http://localhost:3000/server"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Waktu Server &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Waktu Server Genshin Impact.
                        </p>
                    </a>
                </div>
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
