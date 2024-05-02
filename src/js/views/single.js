import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import styles from "../../styles/portada.css";

// Importa tu archivo de música
import starWarsTheme from "../../img/starwars.mp3";

export const Single = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const [isplaying, setIsplaying]=useState(false)
    useEffect(()=>{
       setIsplaying(true)
       return ()=>{setIsplaying(false)} 
    },[])

    return (
        <div className="single">           
            <audio autoPlay={isplaying}>
                <source src={starWarsTheme} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            <div class="fade"></div>

            <section class="star-wars">
                <div class="crawl">
                    <div class="title">
                        <p>Welcome!!</p>
                        <h1>A New Hope...</h1>
                    </div>

                    <p>Hey there, it seems we've landed in a galaxy full of emotions! After an endless odyssey of headaches, hours staring at the computer screen, patience that I wasn't even sure I had, and a good handful of frustration, I can finally announce that my Star Wars API project has seen the light! 🌟</p>

                    <p>But, I can't help but thank my dear accomplices in this impossible mission! my teachers from 4geeks Academy, you are the true heroes behind the screen! 🦸‍♂️ Without your help and encouragement, this would have been as complicated as understanding the family connections in a Skywalker saga! 😅</p>

                    <p>So, with a little Jedi magic and a lot of effort, we managed to take this project to the hyperspace of success! 🚀 May the Force continue to be our ally in all the adventures that await us. And may the excitement of this victory accompany us with every click along the way! ✨</p>
                </div>
            </section>
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
