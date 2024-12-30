import logo from './logo.jpg';
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
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-disabled="true">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Two Sheater</a></li>
                                    <li><a className="dropdown-item" href="#">Four Sheater</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Seven Sheater</a></li>
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