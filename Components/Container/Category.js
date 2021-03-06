import React from 'react';
function Category(props) {
    return (
      <div className="category-section">
        <nav className="navbar navbar-expand-lg shadow category-navbar">
        <a className="navbar-brand mt-2" href="#">ALL CATEGORIES</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mt-2">
              <a className="nav-link" href="#">Mobile Phones<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2" href="#">Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2" href="#">Moter Cycles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2" href="#">Houses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2" href="#">TV-Video-Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2" href="#">Tablets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-2" href="#">Land & Plots</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      
       
    );
}
export default Category