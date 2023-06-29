
export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <i className="fas fa-calendar-alt"></i>
                        &nbsp; 
                        Jhon Doe
                    </a>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger" type="submit">
                            <i className="fas fa-sign-out-alt" ></i>
                            &nbsp;
                            Exit
                        </button>
                    </form>
                </div>
            </nav>
        </>
    )
}