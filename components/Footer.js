export default function Footer() {
    return (
        <footer className="flex items-center justify-center w-full h-20">
            <div className="flex mb-2 space-x-2 text-sm text-black dark:text-white">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            
            <a
            className="flex items-center justify-center"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
            </a>
            </div>
        </footer>
    )
}