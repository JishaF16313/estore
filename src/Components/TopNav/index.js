import "./_top-nav.scss"
const TopNav = () => {
    return (
        <div>
            <div className='header bg-dark'>
                <div className='row top-nav-row'>
                    <div className='brand my-1'>
                        <h1>eStore</h1>
                    </div>
                    <div className='inp-container w-50 h-25 bg-white p-0 my-4'>
                        <div className='dropdown m-0 p-0'>
                            <select className='select-btn w-100 p-0 m-0'>
                                <option>Women</option>
                                <option>Men</option>
                                <option>Kids</option>
                            </select>
                        </div>
                        <input type="text" className='form-control' placeholder='Search...' />
                        <button><i className='fa fa-search'></i></button>
                    </div>
                    <div className='login-container p-0'>
                        <i className='fa fa-user-circle user-icon' />
                        <h5><a href="#">Login</a></h5> / <h5><a href="#">Register</a></h5>
                    </div>
                    <div className='cart-wishlist'>
                        <ul className='p-0'>
                            <li className='list-icon'><i className='fa fa-heart' /></li>
                            <li className='list-icon'><i className='fa fa-shopping-cart' /></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default TopNav;