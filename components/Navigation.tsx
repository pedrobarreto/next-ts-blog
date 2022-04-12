
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link';


const links: { name: string; href: string }[] = [
    {
        name: 'Tecnologia',
        href: '/',
    },
    {
        name: 'Tutoriais',
        href: '/tutoriais',
    },
    {
        name: 'Contato',
        href: '/contato',
    },
]

const Navigation = (): JSX.Element => {
    const router = useRouter()

    return (
            <nav className="flex">
                {links.map(({ name, href }) => (
                    <Link key={name} href={href}>
                        <a className="mr-6 sm:mr-8 flex flex-col relative">
                            {name}
                        </a>
                    </Link>
                ))}
            </nav>
    )
}

export default Navigation