import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useEffect, useState, useContext } from "react";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	console.log(store.favoritos)





	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1"><img className="imagenNav" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg"></img></span>
			</Link>
			<h1 className="tituloNav">Starwars API</h1>
			<div>
				<div className="dropdown">
					<button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
						Favorites
					</button>
					<ul className="dropdown-menu mr-4">

						{store.favoritos.map((favorito, index) =>
							<li className="regalo d-flex justify-content-around" key={index}>
								<span className="text-aling-center w-100">{favorito}</span>
								<div className="d-flex aling-items-center me-1">
									<i className="boton" onClick={() => actions.handleDelete(index)}><i className="fa-solid fa-eraser"></i></i>
								</div>

							</li>
						)}

						<p>Favoritos {store.favoritos.length}</p>
					</ul>
				</div>

			</div>
		</nav>
	);
};

