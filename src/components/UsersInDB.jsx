import React from 'react'

import User from './User'

class UsersInDB extends React.Component {
    //reemplaza el constructor si no voy a hacer nada más que darle el estado
    state = {
        usersList: [],
        isSecondaryBg: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then(response => {
                this.setState({ userList: response.data })
            })
            .catch(err => console.log(err))
    }

    onMouseOverTitle = () => {
        this.setState({ isSecondaryBg: !this.state.isSecondaryBg })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 onMouseOver={this.onMouseOverTitle} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                    </div>
                    <div className={`card-body ${this.state.isSecondaryBg && 'bg-secondary'}`}>
                        <div className="row">
                            <thead>
                                <tr>

                                    <th>Nombre</th>

                                    <th>Email</th>
                                </tr>
                            </thead>

                            {this.state.usersList.map((user, index) =>
                                <User {...user} key={index}  />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UsersInDB