import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { CharContext } from "../contexts/CharacterContext";
import axios from "axios";


const CharacterPage = () => {
    const character = useContext(CharContext)

    const updateCharacter = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        /* axios.post('http://localhost:8000/api/...', ) */ //falta la ruta
        console.log([...Array(91).keys()])
        for( let i = 0; i < 91; i++){
            e.currentTarget[i]
        }
    }

    return (
        <form onSubmit={updateCharacter}>
            <div id="inputs-identity">
                <label >Nombre <input name="name" type="text" placeholder="Nombre del personaje"></input></label>
                <label >Clase <input name="class" type="text" placeholder="Clase del personaje"></input></label>
                <label >nivel <input name="level" type="number" placeholder="Nivel del personaje"></input></label>
                <label >Raza <input name="race" type="text" placeholder="Raza del personaje"></input></label>
                <label >Trasfondo <input name="background" type="text" placeholder="Trasfondo del personaje"></input></label>
                <label >Alineamiento <input name="alignment" type="text" placeholder="Alineamiento del personaje"></input></label>
            </div>

            <div id="inputs-stats">
                <label >FUE <input name="str" type="number" placeholder="Fuerza"></input></label>
                <label >DES <input name="dex" type="number" placeholder="Destreza"></input></label>
                <label >CON <input name="cos" type="number" placeholder="Constitución"></input></label>
                <label >INT <input name="int" type="number" placeholder="Inteligencia"></input></label>
                <label >SAB <input name="wis" type="number" placeholder="Sabiduría"></input></label>
                <label >CAR <input name="cha" type="number" placeholder="Carisma"></input></label>
            </div>
            
            <label >percepcion pasiva <input type="number"></input></label>
            <label >inspiration <input name="inspiration" type="checkbox"></input></label>
            <label >Competencia <input name="name" type="number" placeholder="Competencia"></input></label>

            <div id="inputs-savingThrows">
                <label ><input name="savingStr" type="checkbox" />FUE <input name="name" type="number" placeholder="Fuerza"></input></label>
                <label ><input name="savingDex" type="checkbox" />DES <input name="name" type="number" placeholder="Destreza"></input></label>
                <label ><input name="savingCon" type="checkbox" />CON <input name="name" type="number" placeholder="Constitución"></input></label>
                <label ><input name="savingInt" type="checkbox" />INT <input name="name" type="number" placeholder="Inteligencia"></input></label>
                <label ><input name="savingWis" type="checkbox" />SAB <input name="name" type="number" placeholder="Sabiduría"></input></label>
                <label ><input name="savingCha" type="checkbox" />CAR <input name="name" type="number" placeholder="Carisma"></input></label>
            </div>

            <div id="inputs-skills">
                <label ><input name="acrobacias" type="checkbox" />Acrobacias <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="arcano" type="checkbox" />Arcano <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="atletismo" type="checkbox" />Atletismo <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="engaño" type="checkbox" />Engaño <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="historia" type="checkbox" />Historia <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="interpretacion" type="checkbox" />Interpretación <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="intimidacion" type="checkbox" />Intimidación <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="investigacion" type="checkbox" />Investigación <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="juegoDeManos" type="checkbox" />Juego de manos <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="medicina" type="checkbox" />Medicina <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="naturaleza" type="checkbox" />Naturaleza <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="percepcion" type="checkbox" />Percepción <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="perspicacia" type="checkbox" />Perspicacia <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="persuacion" type="checkbox" />Persuación <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="religion" type="checkbox" />Religión <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="sigilo" type="checkbox" />Sigilo <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="supervivencia" type="checkbox" />Supervivencia <input name="name" type="number" placeholder="Carisma"></input></label>
                <label ><input name="tratoConAnimales" type="checkbox" />Trato con animales <input name="name" type="number" placeholder="Carisma"></input></label>
            </div>

            <div id="inputs-combatStats">
                <label >CA <input name="classArmor" type="number" placeholder="CA"></input></label>
                <label >Iniciativa <input  type="number" placeholder="Iniciativa"></input></label>
                <label >Velocidad <input name="velocity" type="number" placeholder="Velocidad"></input></label>
                <label >Puntos de vida maximos <input name="hpMax" type="number" placeholder="Vida"></input></label>
                <label >Puntos de vida actuales <input name="hpCurrent" type="number" placeholder="Vida actual"></input></label>
                <label >Puntos de vida temporales <input name="hpTemp" type="number" placeholder="vida temporal"></input></label>
                <label >Dados de golpe <input name="name" type="hpDice" placeholder="vida temporal"></input></label>

                
                <label >exitos <input type="checkbox"/><input name="name" type="checkbox"/><input name="name" type="checkbox"/></label>
                <label >fallos <input type="checkbox"/><input name="name" type="checkbox"/><input name="name" type="checkbox"/></label>
            </div>

            <div id="inputs-whoAmI">
                <label >Personality Traits <textarea  name="personality-traits" rows="5" cols="5"></textarea></label>
                <label >Ideales <textarea  name="ideales" rows="5" cols="5"></textarea></label>
                <label >Vinculos <textarea  name="vinculos" rows="5" cols="5"></textarea></label>
                <label >Defectos <textarea  name="defectos" rows="5" cols="5"></textarea></label>

            </div>

            <div id="inputs-proficiencias-lenguajes">
                <label >competencias <textarea  name="competencias" rows="5" cols="5"></textarea></label>
                <label >lenguajes <textarea  name="lenguajes" rows="5" cols="5"></textarea></label>
            </div>
            <div id="inputs-equipamiento">
                <label>pc<input name="name" type="number"/></label>
                <label>pp<input name="name" type="number"/></label>
                <label>po<input name="name" type="number"/></label>
                <label>pp<input name="name" type="number"/></label>
                <label>equipamiento<textarea  name="equipamiento" rows="5" cols="5"></textarea></label>

            </div>

            <div id="inputs-caracterisicas">
                <label>Caracteristicas <textarea name="caracteristicas" rows="5" cols="5"></textarea></label>
            </div>
            
            <div id="apariencia">
                <label>Apariencia <textarea name="apariencia" rows="5" cols="5"></textarea></label>
            </div>
            <div id="backstory">
                <label>backstory <textarea name="historia de trasfondo" rows="5" cols="5"></textarea></label>
            </div>
            <input name="name" type="submit" placeholder="amogus" />
        </form>
    )
}

export default CharacterPage;