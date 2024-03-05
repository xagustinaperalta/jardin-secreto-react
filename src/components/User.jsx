import PropTypes from 'prop-types'

function User(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.gender}</td>
        </tr>
    )

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired

}

export default User