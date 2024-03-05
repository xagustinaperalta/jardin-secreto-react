import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowProducts() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalUsers, setTotalUsers] = useState('No hay registros');
    const [totalCategories, setTotalCategories] = useState(0);


    useEffect(() => {
        // Fetch para el total de productos
        fetch('http://localhost:3000/api/products')
            .then(response => response.json())
            .then(data => { 
                setTotalCategories(data.countByCategory?.length || 0 );
                if (data.count) {
                    setTotalProducts(data.count);
                } else {
                    console.error('La respuesta no contiene el recuento de productos');
                }
            })
            .catch(error => {
                console.error('Error al obtener el recuento de productos:', error);
            });

        // Fetch para el total de usuarios
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => {
                setTotalUsers(data.count);
            })
            .catch(error => {
                console.error('Error al obtener el total de usuarios:', error);
            });

        // Fetch para la cantidad de categorías
        fetch('http://localhost:3000/api/products/count-categories')
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue exitosa');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.hasOwnProperty('count')) {
                setTotalCategories(data.count);
            } else {
                console.error('La respuesta no contiene el recuento de categorías');
            }
        })
        .catch(error => {
            console.error('Error al obtener el recuento de categorías:', error);
        });
    }, []);

    const cardProps = [
        {
            title: 'Total de productos',
            color: 'primary',
            quantity: totalProducts,
            icon: 'fa-film',  
            iconColor: '#efc84c',
            quantityColor: 'white',
        },
        {
            title: 'Total de usuarios',
            color: 'success',
            quantity: totalUsers,
            icon: 'fa-user',  
            iconColor: '#00b8a7',
            quantityColor: 'white'
        },
        {
            title: 'Total de categorías',
            color: 'warning',
            quantity: totalCategories,
            icon: 'fa-award',  
            iconColor: '#d83f1f',
            quantityColor: 'white',
        }
    ];

    return (
        <div className="row">
            {cardProps.map((card, i) => (
                <SmallCard {...card} key={i} />
            ))}
        </div>
    );
}

export default ContentRowProducts;
