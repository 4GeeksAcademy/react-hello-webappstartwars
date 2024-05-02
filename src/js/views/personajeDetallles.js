import React from "react";
import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import audio from "../../img/robot.mp3"


export const PersonajeDetalles = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    console.log(params.uid)


    
    useEffect(() => {
      
        actions.obtenerDetallePersonaje(params.uid)        
    }, [])

    console.log(store.personaje?.result?.properties)
    
    return (
    
            <div className="wrapper">
                <audio autoPlay>
                <source src={audio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
                <div className="tituloIndividual">
                    <h4>{store.personaje?.result?.properties.name}</h4>
                    <img className="imagenIndividual" src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} alt="..." />
                </div>
                <div className="descripcionIndividual">
                    <p className="card-text"><strong>birth_year: </strong>{store.personaje?.result?.properties.birth_year}</p>
                    <p className="card-text"><strong>Mass: </strong> {store.personaje?.result?.properties.mass}</p>
                    <p className="card-text"><strong>Created: </strong> {store.personaje?.result?.properties.created}</p>
                    <p className="card-text"><strong>Edited: </strong> {store.personaje?.result?.properties.edited}</p>
                    <p className="card-text"><strong>eye Color: </strong> {store.personaje?.result?.properties.eye_color}</p>
                    <p className="card-text"><strong>hair_color: </strong> {store.personaje?.result?.properties.hair_color}</p>
                    <p className="card-text"><strong>height:</strong> {store.personaje?.result?.properties.height}</p>
                    <p className="card-text"><strong>skin_color: </strong> {store.personaje?.result?.properties.skin_color}</p>
                </div>
                <div className="urlIndividual">
                    <p className="card-text"><strong>Films: </strong> {store.personaje?.result?.properties.films}</p>
                    <p className="card-text"><strong>Homeworld: </strong> {store.personaje?.result?.properties.homeworld}</p>
                    <p className="card-text"><strong>Species: </strong> {store.personaje?.result?.properties.species}</p>
                </div>
            </div>

    )
}

