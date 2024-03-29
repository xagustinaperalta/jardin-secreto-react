import ContentRowProducts from "./ContentRowProducts"

import LastProductInDb from "./LastProductInDb"

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Jardin Secreto Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <ContentRowProducts />
            {/* <!-- End movies in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                <LastProductInDb />
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
               
            </div>
        </div>
    )
}

export default ContentRowTop