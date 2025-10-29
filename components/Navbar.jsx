import { BiSolidHome } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function Navbar() {
    const ButtonStyle = "hover:text-cyan-500 hover:text-shadow-light-glow hover:dark:text-shadow-dark-glow hover:scale-105 transition-all duration-300";

    return (
        <nav className="fixed ml-5 top-1/2 -translate-y-1/2 flex-col flex-wrap w-auto rounded-[3rem] text-lg font-medium border px-6 py-4 space-y-2 bg-gray-50 dark:bg-gray-800 border-neutral-950 dark:border-white hover:scale-110 transition-all duration-300">
            <a href="/" className={ButtonStyle}><BiSolidHome /></a><br />
            <a href="/home/swadeshpatel" className={ButtonStyle}><FaUser /></a><br />
            <a href="/opt/projects" className={ButtonStyle}><FaProjectDiagram /></a><br />
            <a href="/dev/tty" className={ButtonStyle}><FaPhone /></a>
        </nav>
    )
}

export default Navbar;