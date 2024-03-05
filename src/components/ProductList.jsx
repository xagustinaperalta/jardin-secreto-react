import PropTypes from 'prop-types';

function ProductList(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
            <td>{props.image}</td>
            <td>{props.in_sale ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}</td>
            <td>{props.category.name}</td>
        </tr>
    )
}

ProductList.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    in_sale: PropTypes.string,
    category: PropTypes.string,
}

export default ProductList;