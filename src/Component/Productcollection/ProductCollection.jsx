import React from 'react';
import './Collection.css'; // Import CSS file

const ProductCollection = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <p className='riccofiproduct'>Get Your Home Riccofied</p>
                    </div>
                    <div className="product-collection">
                        <div className='child'>
                            <img src="./image/Dishwash gel.jpg" alt="Dishwash Gel" />
                        </div>

                        <div className='child'>
                            <img src="./image/Dishwash Tub.jpg" alt="Dishwash Tub" />
                        </div>
                        <div className='child'>
                            <img src="./image/bathroom+tile.jpg" alt="Dishwash Gel" />
                        </div>

                        <div className='child'>
                            <img src="./image/Detergent bar.jpg" alt="Dishwash Tub" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCollection;
