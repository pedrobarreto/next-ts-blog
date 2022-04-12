import Link from "next/link"
import Navigation from "./Navigation"


const Header = (): JSX.Element => (
    <header
        className="
        w-full inline-block bg-white flex flex-row justify-between items-center
        h-16 md:h-20 border-b border-gray-200 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        dark:bg-gray-800 dark:border-gray-600
        text-black dark:text-white
    "
    >
        <Link href="/">
            <a>
                <span className="hide sm:show">Farofa Tech</span>
            </a>
        </Link>
        <div className="flex flex-row items-center">
           <Navigation /> 
        </div>
    </header>
)



export default Header