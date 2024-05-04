import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Naves = () => {
    const { store, actions } = useContext(Context);    
    const navigate = useNavigate();

    useEffect(() => {
        actions.cargarNaves();
    }, []);


    return (
        <div className="scroll-container">
            <div className="d-inline-flex scroll">
                {store.naves.map(nave => (
                    <div className="card row m-3" style={{ width: "18rem" }} key={nave.url}>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${nave.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{nave.name}</h5>
                            <div className="botonDetalle d-flex">
                                <button className="btn btn-primary" onClick={() => navigate(`/naveDetalles/${nave.uid}`)}>Ver detalles</button>
                                <div className="corazon">
                                    <button className="botonCorazon" submit="button" onClick={() => { actions.setFavoritos(nave.name) }}>
                                        <div title="Like" className="heart-container">
                                            <input id="Give-It-An-Id" className="checkbox" type="checkbox" />
                                            <div className="svg-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-outline" viewBox="0 0 24 24">
                                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                                    </path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-filled" viewBox="0 0 24 24">
                                                    <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                                    </path>
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" className="svg-celebrate">
                                                    <polygon points="10,10 20,20"></polygon>
                                                    <polygon points="10,50 20,50"></polygon>
                                                    <polygon points="20,80 30,70"></polygon>
                                                    <polygon points="90,10 80,20"></polygon>
                                                    <polygon points="90,50 80,50"></polygon>
                                                    <polygon points="80,80 70,70"></polygon>
                                                </svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
