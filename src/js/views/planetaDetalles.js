import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import audio from "../../img/robot.mp3"

export const PlanetaDetalles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.obtenerDetallePlaneta(params.uid)
    }, [])

    return (

        <div className="wrapper">
             <audio autoPlay>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="tituloIndividualPlaneta">
                <h4>{store.planeta?.result?.properties.name}</h4>
                <img className="imagenIndividualPlaneta" src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} alt="..." />
            </div>
            <div className="descripcionIndividualPlaneta">
                    <p className="card-text"><strong>Population: </strong> {store.planeta?.result?.properties.population}</p>
                    <p className="card-text"><strong>Orbital period: </strong> {store.planeta?.result?.properties.orbital_period}</p>
                    <p className="card-text"><strong>Climate: </strong> {store.planeta?.result?.properties.climate}</p>
                    <p className="card-text"><strong>Created: </strong> {store.planeta?.result?.properties.created}</p>
                    <p className="card-text"><strong>Diameter: </strong> {store.planeta?.result?.properties.diameter}</p>
                    <p className="card-text"><strong>Edited: </strong> {store.planeta?.result?.properties.edited}</p>
                    <p className="card-text"><strong>Gravity: </strong> {store.planeta?.result?.properties.gravity}</p>
                    <p className="card-text"><strong>Rotation_period: </strong> {store.planeta?.result?.properties.rotation_period}</p>
                    <p className="card-text"><strong>Surface water: </strong> {store.planeta?.result?.properties.surface_water}</p>
                    <p className="card-text"><strong>Terrain: </strong> {store.planeta?.result?.properties.terrain}</p>
            </div>
            <div className="urlIndividualPlaneta">
                    <p className="card-text"><strong>Films: </strong> {store.planeta?.result?.properties.films}</p>
                    <p className="card-text"><strong>Residents: </strong> {store.planeta?.result?.properties.residents}</p>
                    <p className="card-text"><strong>Url: </strong> {store.planeta?.result?.properties.url}</p>
            </div>
        </div>    
    )
}