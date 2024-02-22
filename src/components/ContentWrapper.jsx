import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"
import Movie from "./Movie"
import TopBar from "./TopBar"

function ContentWrapper() {
	return (
		//  es como un div fantasma <> para que no se cambie nada de html
        <>
			{/* <!-- Content Row Top --> */}
			< ContentRowTop />
			{/* <!--End Content Row Top--> */}
			< Movie />
		</>
	)
}

export default ContentWrapper