// instalar axios para hacer llamadas a servicios externos.

//importacion con ES6
import axios from "axios";


axios.get('https://pokeapi.co/api/v2/pokemon/Pikachu')
    .then(function (response) {
        // handle success
        console.log("Succsess");
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("Error");
        console.log(error);
    })

