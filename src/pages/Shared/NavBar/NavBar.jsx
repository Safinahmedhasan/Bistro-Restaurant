import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    const navOptions = <>

        <Link to='/'> <li><a>Home</a></li></Link>
        <li><a>CONTACT US</a></li>
        <li><a>DASHBOARD</a></li>
        <Link to='/ourMenu'><li><a>OUR MENU</a></li></Link>
        <li><a>OUR SHOP</a></li>
    </>

    return (
        <div className='ex bg-black opacity-80 '>
            <div className="container mx-auto navbar  relative z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='text-white'>
                        <a className="btn btn-ghost normal-case text-xl font-Cinzel ">BISTRO BOSS</a>
                        <br />   <p className='ml-4'>R E S T A U R A N T</p>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;