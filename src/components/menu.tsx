import { ROUTES } from '@/constants/routes';
import Link from 'next/Link';


export const Menu = () => {
    return(
        <>
            <nav className=' w-screen bg-gray-700 p-2 gap-x-5 flex justify-center align-items flex-row font-karlafont '>
                <Link href={ROUTES.home} className='bg-gray-300 border-8 rounded cursor-pointer' >Menu</Link>
                <Link href={ROUTES.maths} className='bg-gray-300 border-8 rounded cursor-pointer' >Home</Link>
            </nav>
        </>
    )
}