const Hamburger = (props) => {
    return (
        <div className="nav__hamburger-container">
            <button
                onClick={() => props.setMobileNav(true)}
                className={`nav__hamburger${props.mobileNav ? ' nav__hamburger--active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}
 
export default Hamburger;