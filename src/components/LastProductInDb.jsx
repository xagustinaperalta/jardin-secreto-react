import React, { useState, useEffect } from 'react';

function LastProductInDb() {
    const [lastProduct, setLastProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/products/last-product')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                setLastProduct(data.data);  // Accede al objeto 'data' dentro de la respuesta
            })
            .catch(error => {
                console.error('Error al obtener el último producto:', error);
                setError(error);
            });
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{lastProduct && lastProduct.name}</h5> Último producto agregado 
                </div>
                <div className="card-body">
                    {lastProduct ? (
                        <>
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '100%', height: '248px', objectFit: 'cover', objectPosition: 'center' }} src={`http://localhost:3000/images/products/${lastProduct.image}`}  alt={lastProduct.name} />
                            </div>
            
                            <p>{lastProduct.description}</p>
                            <a className="btn btn-danger" href={`http://localhost:3000/products/last-product/${lastProduct.id}`}>Ver detalle</a> 
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}



export default LastProductInDb;
