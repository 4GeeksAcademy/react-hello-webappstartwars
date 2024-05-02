
import React from "react";

import "../../styles/home.css";
import { Personajes } from "../component/personajes";
import { Naves } from "../component/naves";
import { Planetas } from "../component/planetas";


export const Home = () => (
	<div className="text-center mt-5">		
		<h1 className="text-decoration-underline mb-3">People</h1>
		<div>
			<Personajes />
		</div>
		<h1 className="text-decoration-underline mt-3 mb-3">Planets</h1>
		<div>
			<Planetas />
		</div>
		<h1 className="text-decoration-underline mt-3 mb-3">Vehicles</h1>
		<div>
			<Naves />
		</div>

	</div>
);
