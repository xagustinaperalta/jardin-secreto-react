import SmallCard from "./SmallCard"

const data = [
    {
        title: 'Producto totales',
        quantity: 21, // ver(tiene que venir por base de datos)
        color: 'primary',
        icon: 'fa-film'
    },
    {
        title: 'Categorias totales',
        quantity: 79,
        color: 'success',
        icon: 'fa-award'
    },
    {
        title: 'Usuarios totales',
        quantity: 49,
        color: 'warning',
        icon: 'fa-user'
    }
]

function ContentRowProducts() {
    return (
        <div className="row">

            {/* <!-- Movies in Data Base --> */}
            {/* <!-- Total awards --> */}
            {/* <!-- Actors quantity --> */}
            {data.map((element, key) =>
                <SmallCard 
                    key={key} 
                    title={element.title} 
                    quantity={element.quantity} 
                    color={element.color} 
                    icon={element.icon} 
                />
            )}

        </div>
    )
}
export default ContentRowProducts;