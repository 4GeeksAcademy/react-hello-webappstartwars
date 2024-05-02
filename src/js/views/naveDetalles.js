import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import audio from "../../img/robot.mp3"

export const NaveDetalles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.obtenerDetalleNave(params.uid)
    }, [])

    return (
        
            <div className="wrapper">
                 <audio autoPlay>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
                <div className="tituloIndividualNave">
                    <h4>{store.nave?.result?.properties.name}</h4>
                    <img className="imagenIndividualNave" src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`} alt="..." />
                </div>
                <div className="descripcionIndividualNave">
                    <p className="card-text"><strong>Cargo capacity: </strong> {store.nave?.result?.properties.cargo_capacity}</p>
                    <p className="card-text"><strong>Crew: </strong> {store.nave?.result?.properties.crew}</p>
                    <p className="card-text"><strong>Consumables: </strong> {store.nave?.result?.properties.consumables}</p>
                    <p className="card-text"><strong>Cost in credits: </strong> {store.nave?.result?.properties.cost_in_credits}</p>
                    <p className="card-text"><strong>Passengers: </strong> {store.nave?.result?.properties.passengers}</p>
                    <p className="card-text"><strong>Created: </strong> {store.nave?.result?.properties.created}</p>
                    <p className="card-text"><strong>Edited: </strong> {store.nave?.result?.properties.edited}</p>
                    <p className="card-text"><strong>Model: </strong> {store.nave?.result?.properties.model}</p>
                    <p className="card-text"><strong>Vehivle_class: </strong> {store.nave?.result?.properties.vehicle_class}</p>
                    <p className="card-text"><strong>Max atmosphering speed: </strong> {store.nave?.result?.properties.max_atmosphering_speed}</p>
                    <p className="card-text"><strong>Model: </strong> {store.nave?.result?.properties.model}</p>
                    <p className="card-text"><strong>Manufacturer: </strong> {store.nave?.result?.properties.manufacturer}</p>
                </div>                
                <div className="urlIndividualNave">
                    <p className="card-text"><strong>Films: </strong> {store.nave?.result?.properties.films}</p>
                    <p className="card-text"><strong>Url: </strong> {store.nave?.result?.properties.url}</p>
                    <p className="card-text"><strong>pilots: </strong> {store.nave?.result?.properties.pilots}</p>
                </div>
               
            </div>
        )
}
