let pokimon = [];
let pokemonGuardado = ""; //Usado para buscar el pokémon y guardar los valores
let pokemonGuardado_2 = ""; // En este caso es por si quiero hacer una comparación, con el mismo propósito que la otra variable
//Nota: deberías de considerar agregar una comparación entre dos pokémon

fetch("pokedex.json")
    .then(response => response.json())
    .then(pokemon => pokimon = pokemon); //por lo que entiendo esta función nos permite definir a la variable pokimon como los valores guardados en el json... lo encontré en: https://www.youtube.com/watch?v=C3dfjyft_m4

//Buscar pokémon por número o por nombre

//str.charAt(0).toUpperCase() + str.slice(1); para hacer la primera letra grande
buscar = () => {
    let nombrePokemon = (document.getElementById("nombrePokemon").value).charAt(0).toUpperCase() + ((document.getElementById("nombrePokemon").value).slice(1)).toLowerCase();
    for (let i = 0; i < pokimon.length; i++) {
        if (nombrePokemon === pokimon[i].name.english) {
            pokemonGuardado = pokimon[i] //esto me permite buscar el elemento
        }
    }
    if (pokemonGuardado.name.english != nombrePokemon) {
        alert("El pokémon no existe")
    } else {
        //Esto es para cambiar los valores de la info, el código está correcto, pero no lo hace en la función
        document.getElementById("especiePokemon").innerText = pokemonGuardado.name.english
        document.getElementById("nombreJap").innerText = pokemonGuardado.name.japanese

        //Aquí puedo cambiar los colores y degradado del css de acuerdo a su tipo
        document.getElementById("tipo").innerText = pokemonGuardado.type



        //Usado porque se necesita agregar 0 o 00 en valores menores a 100
        if (pokemonGuardado.id > 9 && pokemonGuardado.id <= 99) {
            document.getElementById("imagenPokemon").src = `/images/0${pokemonGuardado.id}.png`
            document.getElementById("thumbnail").src = `/sprites/0${pokemonGuardado.id}MS.png`

        } else if (pokemonGuardado.id < 10) {
            document.getElementById("imagenPokemon").src = `/images/00${pokemonGuardado.id}.png`
            document.getElementById("thumbnail").src = `/sprites/00${pokemonGuardado.id}MS.png`
        } else {
            document.getElementById("imagenPokemon").src = `/images/${pokemonGuardado.id}.png`
            document.getElementById("thumbnail").src = `/sprites/${pokemonGuardado.id}MS.png`
        }

        document.getElementById("statHP").style = `width: ${pokemonGuardado.base.HP * 100 / 255}%`
        document.getElementById("statHP").innerText = `${pokemonGuardado.base.HP}`
        document.getElementById("statAttack").style = `width: ${pokemonGuardado.base.Attack * 100 / 190}%`
        document.getElementById("statAttack").innerText = `${pokemonGuardado.base.Attack}`
        document.getElementById("statDefence").style = `width: ${pokemonGuardado.base.Defense * 100 / 250}%`
        document.getElementById("statDefence").innerText = `${pokemonGuardado.base.Defense}`
        document.getElementById("statSpAttack").style = `width: ${pokemonGuardado.base["Sp. Attack"] * 100 / 194}%`
        document.getElementById("statSpAttack").innerText = `${pokemonGuardado.base["Sp. Attack"]}`
        document.getElementById("statSpDefence").style = `width: ${pokemonGuardado.base["Sp. Defense"] * 100 / 250}%`
        document.getElementById("statSpDefence").innerText = `${pokemonGuardado.base["Sp. Defense"]}`
        document.getElementById("statSpeed").style = `width: ${pokemonGuardado.base.Speed * 100 / 180}%`
        document.getElementById("statSpeed").innerText = `${pokemonGuardado.base.Speed}`
        //regresar el header a su lugar en el top
        document.getElementById("header").style.marginTop = 0;
        //mostrar el container
        document.getElementById("container").style.visibility = "visible"
        //mostrar el botón para agregar una comparación
        if (document.getElementById("container2").style.visibility = "hidden") {
            document.getElementById("agregarOtro").style.visibility = "visible";
        }
        //es más de diseño al inicio
        document.getElementById("botonPokebola").style.visibility = "hidden";
    }
    document.getElementById("nombrePokemon").value = "";
}
buscar2 = () => {
    document.getElementById("info").style.padding = 0;
    document.getElementById("container2").style.display = "flex";
    document.getElementById("info2").style.padding = 0;

    pokemonGuardado = "";
    let nombrePokemon = (document.getElementById("nombrePokemon2").value).charAt(0).toUpperCase() + (document.getElementById("nombrePokemon2").value).slice(1).toLowerCase();
    for (let i = 0; i < pokimon.length; i++) {
        if (nombrePokemon === pokimon[i].name.english) {
            pokemonGuardado = pokimon[i] //esto me permite buscar el elemento
        }
    }
    if (pokemonGuardado.name.english != nombrePokemon) {
        alert("El pokémon no existe")
    } else {
        console.log(pokemonGuardado);
        //Esto es para cambiar los valores de la info, el código está correcto, pero no lo hace en la función
        document.getElementById("especiePokemon2").innerText = pokemonGuardado.name.english
        document.getElementById("nombreJap2").innerText = pokemonGuardado.name.japanese

        //Aquí puedo cambiar los colores y degradado del css de acuerdo a su tipo
        document.getElementById("tipo2").innerText = pokemonGuardado.type



        //Usado porque se necesita agregar 0 o 00 en valores menores a 100
        if (pokemonGuardado.id > 9 && pokemonGuardado.id <= 99) {
            document.getElementById("imagenPokemon2").src = `/images/0${pokemonGuardado.id}.png`
            document.getElementById("thumbnail2").src = `/sprites/0${pokemonGuardado.id}MS.png`

        } else if (pokemonGuardado.id < 10) {
            document.getElementById("imagenPokemon2").src = `/images/00${pokemonGuardado.id}.png`
            document.getElementById("thumbnail2").src = `/sprites/00${pokemonGuardado.id}MS.png`
        } else {
            document.getElementById("imagenPokemon2").src = `/images/${pokemonGuardado.id}.png`
            document.getElementById("thumbnail2").src = `/sprites/${pokemonGuardado.id}MS.png`
        }

        document.getElementById("statHP2").style = `width: ${pokemonGuardado.base.HP * 100 / 255}%`
        document.getElementById("statHP2").innerText = `${pokemonGuardado.base.HP}`
        document.getElementById("statAttack2").style = `width: ${pokemonGuardado.base.Attack * 100 / 190}%`
        document.getElementById("statAttack2").innerText = `${pokemonGuardado.base.Attack}`
        document.getElementById("statDefence2").style = `width: ${pokemonGuardado.base.Defense * 100 / 250}%`
        document.getElementById("statDefence2").innerText = `${pokemonGuardado.base.Defense}`
        document.getElementById("statSpAttack2").style = `width: ${pokemonGuardado.base["Sp. Attack"] * 100 / 194}%`
        document.getElementById("statSpAttack2").innerText = `${pokemonGuardado.base["Sp. Attack"]}`
        document.getElementById("statSpDefence2").style = `width: ${pokemonGuardado.base["Sp. Defense"] * 100 / 250}%`
        document.getElementById("statSpDefence2").innerText = `${pokemonGuardado.base["Sp. Defense"]}`
        document.getElementById("statSpeed2").style = `width: ${pokemonGuardado.base.Speed * 100 / 180}%`
        document.getElementById("statSpeed2").innerText = `${pokemonGuardado.base.Speed}`
        //#pokedex {
        document.getElementById("pokedex").style.display = "flex";
        document.getElementById("container2").style.visibility = "visible";
    }
    document.getElementById("nombrePokemon2").value = ""
}

//Mostrar barra complementaria
mostrar = () => {
    document.getElementById("busqueda2").style.display = "flex";
    document.getElementById("agregarOtro").style.visibility = "hidden";
}
quitar = () => {
    //volver a mostrar los elementos o quitar
    document.getElementById("busqueda2").style.display = "none";
    document.getElementById("agregarOtro").style.visibility = "visible";
    document.getElementById("container2").style.visibility = "hidden";

    document.getElementById("pokedex").style.display = "inline";
    //regresar a sus características originales
    document.getElementById("info").style.paddingLeft = "34%";
    document.getElementById("info").style.paddingRight = "34%";
    //document.getElementById("agregarOtro")
    document.getElementById("busqueda").style.display = "flex";
}