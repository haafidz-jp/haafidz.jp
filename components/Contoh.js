import Head from 'next/head'
import siteMetadata from '/data/siteMetadata'
import ThemeSwitch from './ThemeSwitch'
import Footer from './Footer'

export default function Contoh() {
    return (
        <div className="dark:bg-gray-900 flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>haafidz.jp</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <ThemeSwitch />
            </div>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                Welcome to{' '}
                <a className="text-blue-600" href="/">
                {siteMetadata.title}
                </a>
                </h1>

                <p className="mt-5 text-2xl">
                    Portal Website{' '}
                    <code className="p-3 font-mono text-lg bg-gray-100 rounded-md dark:bg-gray-800">
                        Personal
                    </code>
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/iptv"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">IPTV &rarr;</h3>
                        <p className="mt-4 text-xl">
                        IPTV API.
                        </p>
                    </a>

                    <a
                        href="/server"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">SERVER TIME &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Waktu Server Game.
                        </p>
                    </a>

                    <a
                        href="https://haafidz-blog.vercel.app/"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">BLOG &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Personal Blog's.
                        </p>
                    </a>

                    <a
                        href="https://haafidz-blog.vercel.app/"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">JADWAL &rarr;</h3>
                        <p className="mt-4 text-xl">
                        Personal Schedules.
                        </p>
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    )
}
