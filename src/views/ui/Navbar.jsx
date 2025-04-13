import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext, AuthProvider, LoginPage } from '../../auth';
// import { useContext } from 'react';




export const Navbar = () => {

    const navigate = useNavigate();
    // const {user, logout} =  useContext(AuthContext);
    // // console.log(user);

    const onLogout = () => {
        // logout();
        // navigate('/login', {
        //     replace: true
        // });
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link className="navbar-brand"  to="/" >
                E-Commerce
            </Link>

            <div className="navbar-collapse d-flex justify-content-center w-100">

                <div className="navbar-nav d-flex justify-content-center w-100">

                    <NavLink 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : '' }` } 
                        to="/"
                    > Home
                    </NavLink>

                    <NavLink 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : '' }` } 
                        to="/"
                    > DC
                    </NavLink>

                    {/* <NavLink 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : '' }` } 
                        to="/hero"
                    >
                        Heroes
                    </NavLink> */}

                    {/* <NavLink 
                        className={ ( {isActive} ) => `nav-link ${ isActive ? 'active' : '' }` } 
                        to="/search"
                    >
                        Search
                    </NavLink> */}
                    <form className="d-flex w-50 justify-content-center flex-grow-1" role="search">
                        <input 
                            className="form-control me-2 flex-grow-1 " 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search" 
                            style={{maxWidth: '800px'}}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
            </div>

            <div className="navbar-collapse collapse order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span 
                        className="nav-item nav-link text-primary" 
                        to="/"
                    >
                        Nombre Usuario
                        {/* { user?.name } */}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>

        
    )
}