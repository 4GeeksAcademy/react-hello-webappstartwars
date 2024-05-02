
const getState = ({ getStore, getActions, setStore }) => {	

    return {
        store: {
            personajes: [],
			naves: [],
			planetas: [],
            favoritos: [],
            personaje: {},
            planeta: {},
            nave: {}
        },
        actions: {           
            handleDelete: (index) =>{
                console.log(index)
                let store = getStore()              
                   const filtradoFavorito= store.favoritos.filter((_, currentIndex) => index !== currentIndex); 
                   setStore({favoritos:filtradoFavorito})                                      
            },
            obtenerDetalleNave: (uid) =>{
                fetch(`https://swapi.tech/api/vehicles/${uid}`)
                .then(res => res.json())
                .then(data => setStore({ nave: data }))
                .catch(err => console.error(err));
            },
            obtenerDetallePlaneta: (uid) =>{
                fetch(`https://swapi.tech/api/planets/${uid}`)
                .then(res => res.json())
                .then(data => setStore({ planeta: data }))
                .catch(err => console.error(err))
            },
            obtenerDetallePersonaje: (uid) =>{
                fetch(`https://swapi.tech/api/people/${uid}`)
                .then(res => res.json())
                .then(data => setStore({ personaje: data }))
                .catch(err => console.error(err));
            },
            setFavoritos: (name) =>{
                let store = getStore()
                if(!store.favoritos.includes(name)){
                    setStore({favoritos:[...store.favoritos,name]})
                }         
            },
            cargarPlanetas: () => {
                fetch("https://swapi.tech/api/planets")
                    .then(res => res.json())
                    .then(data => setStore({ planetas: data.results }))
                    .catch(err => console.error(err));
            },

            cargarNaves: () => {
                fetch("https://swapi.tech/api/vehicles")
                    .then(res => res.json())
                    .then(data => setStore({ naves: data.results }))
                    .catch(err => console.error(err));
            },

            cargarPersonajes: () => {
                fetch("https://swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({ personajes: data.results }))
                    .catch(err => console.error(err));
            },

        }
    };
};

export default getState;

