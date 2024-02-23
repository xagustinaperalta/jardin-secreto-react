import React from 'react'

import ProductList from './ProductList'


//TENEMOS QUE CAMBIAR EL NOMBRE DEL COMPONENTE ACA Y EN TODO LUGAR DONDE SE IMPORTE

class Product extends React.Component {

    state = {
        productsList:[]
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(response => {
                this.setState({ productsList: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800" >Todos los productos en la base de datos</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Descrpcion</th>
                                        <th>Precio</th>
                                        <th>Oferta</th>
                                        <th>Categoria</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.productsList.map((product, index) =>
                                        // uso express operator aca porque como el nombre de las campo en el array es el mismo 
                                        // que el de la propiedad que tengo en 
                                        <ProductList  {...product} key={index} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Product