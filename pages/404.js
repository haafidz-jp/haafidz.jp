


export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-inazuma">

            <p className="text-center text-8xl font-sans font-bold text-white">
                404 - Page Not Found
            </p>
            

            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <button className="w-1/2 h-12 px-6 text-black transition-colors duration-150 bg-white rounded-lg focus:shadow-outline">
                <div>
                    <a href="http://localhost:3000/">Back to Home</a>
                </div>
            </button>
            </div>
        </div>
        
    )
  }