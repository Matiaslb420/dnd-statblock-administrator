import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { CharContext } from "../contexts/CharacterContext";


const CharacterPage = () => {
    const character = useContext(CharContext)

    return (
        <form >
            <div id="inputs-identity">
                <label >Nombre <input type="text" placeholder="Nombre del personaje"></input></label>
                <label >Clase <input type="text" placeholder="Clase del personaje"></input></label>
                <label >nivel <input type="number" placeholder="Nivel del personaje"></input></label>
                <label >Raza <input type="text" placeholder="Raza del personaje"></input></label>
                <label >Trasfondo <input type="text" placeholder="Trasfondo del personaje"></input></label>
                <label >Alineamiento <input type="text" placeholder="Alineamiento del personaje"></input></label>
            </div>

            <div id="inputs-stats">
                <label >FUE <input type="number" placeholder="Fuerza"></input></label>
                <label >DES <input type="number" placeholder="Destreza"></input></label>
                <label >CON <input type="number" placeholder="Constitución"></input></label>
                <label >INT <input type="number" placeholder="Inteligencia"></input></label>
                <label >SAB <input type="number" placeholder="Sabiduría"></input></label>
                <label >CAR <input type="number" placeholder="Carisma"></input></label>
            </div>
            
            <label >percepcion pasiva <input type="number"></input></label>
            <label >inspiration <input type="checkbox"></input></label>
            <label >Competencia <input type="number" placeholder="Competencia"></input></label>

            <div id="inputs-savingThrows">
                <label ><input type="checkbox" />FUE <input type="number" placeholder="Fuerza"></input></label>
                <label ><input type="checkbox" />DES <input type="number" placeholder="Destreza"></input></label>
                <label ><input type="checkbox" />CON <input type="number" placeholder="Constitución"></input></label>
                <label ><input type="checkbox" />INT <input type="number" placeholder="Inteligencia"></input></label>
                <label ><input type="checkbox" />SAB <input type="number" placeholder="Sabiduría"></input></label>
                <label ><input type="checkbox" />CAR <input type="number" placeholder="Carisma"></input></label>
            </div>

            <div id="inputs-skills">
                <label ><input type="checkbox" />Acrobacias <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Arcano <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Atletismo <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Engaño <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Historia <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Interpretación <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Intimidación <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Investigación <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Juego de manos <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Medicina <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Naturaleza <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Percepción <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Perspicacia <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Persuación <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Religión <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Sigilo <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Supervivencia <input type="number" placeholder="Carisma"></input></label>
                <label ><input type="checkbox" />Trato con animales <input type="number" placeholder="Carisma"></input></label>
            </div>

            <div id="inputs-combatStats">
                <label >CA <input type="number" placeholder="CA"></input></label>
                <label >Iniciativa <input type="number" placeholder="Iniciativa"></input></label>
                <label >Velocidad <input type="number" placeholder="Velocidad"></input></label>
                <label >Puntos de vida maximos <input type="number" placeholder="Vida"></input></label>
                <label >Puntos de vida actuales <input type="number" placeholder="Vida actual"></input></label>
                <label >Puntos de vida temporales <input type="number" placeholder="vida temporal"></input></label>
                <label >Dados de golpe <input type="text" placeholder="vida temporal"></input></label>

                
                <label >exitos <input type="checkbox"/><input type="checkbox"/><input type="checkbox"/></label>
                <label >fallos <input type="checkbox"/><input type="checkbox"/><input type="checkbox"/></label>
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
                <label>pc<input type="number"/></label>
                <label>pp<input type="number"/></label>
                <label>po<input type="number"/></label>
                <label>pp<input type="number"/></label>
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
            <input type="submit" placeholder="amogus" />
        </form>
    )
}

export default CharacterPage;