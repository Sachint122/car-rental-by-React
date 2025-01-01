import logo from './logo.jpg';
import { Link } from 'react-router-dom'
export default function Navbar() {
    const styles1 = {
        '--bs-scroll-height': '100px', // Use string keys for custom properties
        backgroundColor: 'aqua'
    };
    const remove = {
        mixBlendMode: 'difference', // This removes the black background visually
        width: '150px',
        hight: 'auto',
        // backgroundColor: 'red',
        marginTop:'-45px',
        
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" >
                <div className="container-fluid" style={styles1}>
                    <div className="logo" style={{overflow:'hidden', maxHeight:'60px'}}>
                        <img src={logo} alt="Logo" style={remove} />
                    </div>
                    <h4 className="navbar-brand mt-2">Car Rental</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={styles1}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to='/Contact'>Contact Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/Two_seater'>Two Seater</Link></li>
                                    <li><Link className="dropdown-item" to="/Four_Seater">Four Seater</Link></li>
                                    <li><Link className="dropdown-item" to="/Seven_Seater">Seven Seater</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex " style={{marginRight:'50px'}} role="search">
                            <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}