import "./_side-nav.scss";
const SideNav = () => {
    return (
        <div className="side-nav">
            <div className="section-title">
                <h4>Category</h4>
            </div>
            <div className="accordion">
                <div className="accordion-item individual-category">
                    <div className="accordion-header">
                        <button className="accordion-button" data-bs-target="#accordion-heading-one" data-bs-toggle="collapse">
                            <div className="category-title">
                                <a herf="#">Men</a>
                            </div>
                        </button>
                    </div>

<div className="accordion-collapse collapse show" id="accordion-heading-one">
    <div className="accordion-body">
        <ul>
            <li className="sub-items"><a href="#">Cloths</a></li>
            <li className="sub-items"><a href="#">Shirts</a></li>
            <li className="sub-items"><a href="#">Sub3</a></li>
            <li className="sub-items"><a href="#">Sub4</a></li>
        </ul>

    </div>

</div>

                </div>
            </div>
        </div>
    )
}

export default SideNav