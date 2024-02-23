import PropTypes from 'prop-types';

function ProductList(props) {
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

ProductList.PropTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    sale: PropTypes.string,
    category: PropTypes.string
}

export default ProductList