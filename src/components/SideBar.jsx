import { Link } from "react-router-dom"

function SideBar() {
	return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/images/logo-JS.png" alt="Jardin Secreto" />
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Jardin Secreto</span></Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/last-movie">
					<i className="fas fa-fw fa-folder"></i>
					<span>Ultimo producto</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/genres">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Categorias</span></Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/products">
					<i className="fas fa-fw fa-table"></i>
					<span>Productos</span></Link>
			</li>
			
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/search">
					<i className="fas fa-search"></i>
					<span>Buscar</span>
				</Link>
			</li>


			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	)
}

export default SideBar