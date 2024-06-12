import { Outlet,Link, NavLink} from "react-router-dom"

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to ='/' className={({ isActive }) =>
    isActive ? 'border-b-blue-500 text-blue-500 font-bold' : 'font-thin'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/about" className={({ isActive }) =>
    isActive ? 'border-b-blue-500 text-blue-500 font-bold' : 'font-thin'} >About</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/Services" className={({ isActive }) =>
    isActive ? 'border-b-blue-500 text-blue-500 font-bold' : 'font-thin'} > Services</NavLink>
                    </li>
                    <li>
                        <NavLink to ="/contact" className={({ isActive }) =>
    isActive ? 'border-b-blue-500 text-blue-500 font-bold' : 'font-thin'}>Contact</NavLink>
                    </li>
                    
                </ul>
            </nav>
            <Outlet />
        </>
    
        
    )
};

export default Layout;