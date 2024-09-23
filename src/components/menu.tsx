import Link from 'next/Link';


export const Menu = () => {
    return(
        <>
            <nav className='fixed w-screen bg-gray-700 p-2 gap-x-5 flex justify-center align-items flex-row font-karlafont '>
                <p className='bg-gray-300 border-8 rounded cursor-pointer' >Menu</p>
                <p className='bg-gray-300 border-8 rounded cursor-pointer' >Home</p>
            </nav>
        </>
    )
}