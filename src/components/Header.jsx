import Logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className='fixed flex justify-between items-center h-[80px] w-full left-0 top-0 px-20 z-10 text-white'>
            <img src={Logo} alt="Logo" className='w-[100px]' />
            <nav className='flex items-center justify-between w-[45vw]'>
                <ul className='flex space-x-10'>
                    <li className='text-white'>HOME</li>
                    <li className='text-white'>ABOUT US</li>
                    <li className='text-white'>PROJECTS</li>
                </ul>
                <button className='rounded-[4px] bg-gradient-to-r from-white/30 to-white/30  backdrop-blur-[10px] px-5 py-2'>
                    CONTACT US
                </button>
            </nav>
        </header>
    )
}

export default Header;