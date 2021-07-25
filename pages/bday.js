import Head from 'next/head'


export default function Bday() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
            <title>Bday's</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                Happy{' '}
                <a className="text-blue-600" href="localhost:3000/bday">
                    Birth Day!
                </a>
                </h1>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    {/* <a
                        href="http://localhost:3000/iptv"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Genshin Impact &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Localtime.
                        </p>
                    </a> */}

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