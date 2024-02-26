import React from 'react'

import User from './User'

class UsersInDB extends React.Component {
    
    state = {
        usersList: [],

    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(response => {
                this.setState({ usersList: response.data })
            })
            .catch(err => console.log(err))
    }



    render() {
        return (
            <>
                {/*<!-- PRODUCTS LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800" >Usuarios en base de datos</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre y Apellido</th>
                                        <th>Email</th>
                                        <th>Genero</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    {this.state.usersList.map((user, index) =>

                                        <User {...user} key={index} />
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

export default UsersInDB