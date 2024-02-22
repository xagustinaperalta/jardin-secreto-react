import PropTypes from 'prop-types';

function MovieList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>{props.sale}</td>
            <td>{props.category}</td>
        </tr>
    )
}

MovieList.PropTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    awards: PropTypes.number,
    length: PropTypes.number
}

export default MovieList