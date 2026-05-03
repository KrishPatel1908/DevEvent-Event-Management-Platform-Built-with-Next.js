import { headers } from "next/headers"
import Image from "next/image"
import logoImage from '../public/icons/logo.png'
import Link from "next/link"

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className="logo">
                <Image src={logoImage} alt="Logo" height={24} width={24}/>
                <p>DevEvents</p>
            </Link>

            <ul>
                <Link href='/'>Home</Link>
                <Link href='/'>Events</Link>
                <Link href='/'>Create Events</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
