import PropTypes from 'prop-types';
function LastProductInDb(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src="/images/mandalorian.jpg" alt=" Star Wars - Mandalorian " /> 
                    </div>
                    <div>
                        <h1>{props.name}</h1>
                        <p>{props.description}</p>
                        <h2>{props.price}</h2>
                    </div>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
                </div>
            </div>
        </div>
    )


}
LastProductInDb.PropTypes = {

    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,



}

export default LastProductInDb;