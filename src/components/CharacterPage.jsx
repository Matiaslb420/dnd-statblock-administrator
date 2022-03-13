import React, { useContext } from "react";
import { CharContext } from "../contexts/CharacterContext";
import axios from "axios";
import fullBody from "../assets/fullBody.png"


const CharacterPage = () => {
    const character = useContext(CharContext)

    const updateCharacter = (e) => {
        e.preventDefault()
        /* axios.post('http://localhost:8000/api/...', ) */ //falta la ruta
        for( let i = 0; i < 91; i++){
            console.log(i, e.currentTarget[i])
        }
    }

    return (
        <form onSubmit={updateCharacter}>
            <div id="inputs-identity" className="columns">
                <div className="column is-one-third">
                    <label >Nombre <input className="input is-large" name="name" type="text" placeholder="Nombre del personaje"></input></label>
                    <div className="columns">
                        <label className="column">Clase <input className="input is-medium" name="className" type="text" placeholder="Clase del personaje"></input></label>
                        <label className="column is-one-fifth">nivel <input className="input is-medium" name="level" type="number" placeholder="Nivel del personaje"></input></label>
                    </div>
                </div>
                <div className="column columns">
                    <div className="column">
                        <label >Raza <input className="input" name="race" type="text" placeholder="Raza del personaje"></input></label>
                        <label >Trasfondo <input className="input" name="background" type="text" placeholder="Trasfondo del personaje"></input></label>

                    </div>
                    <div id="inputs-proficiencias-lenguajes" className="column">
                        <p><label >lenguajes <textarea id="input-lenguajes" className="textarea has-fixed-size" name="languages" rows="5" cols="5"></textarea></label></p>
                        <p><label >competencias de equipo <textarea id="input-competencias" className="textarea has-fixed-size"  name="proficiencys" rows="5" cols="5"></textarea></label></p>
                    </div>
                    <figure id="fullBody">
                        <img src={fullBody} alt="" />
                    </figure>
                </div>
            </div>
            <div className="columns">
                <div id="inputs-stats" className="column">
                    <label >FUE <input className="input" name="str" type="number" placeholder="Fuerza"></input></label>
                    <label >DES <input className="input" name="dex" type="number" placeholder="Destreza"></input></label>
                    <label >CON <input className="input" name="cos" type="number" placeholder="Constitución"></input></label>
                    <label >INT <input className="input" name="int" type="number" placeholder="Inteligencia"></input></label>
                    <label >SAB <input className="input" name="wis" type="number" placeholder="Sabiduría"></input></label>
                    <label >CAR <input className="input" name="cha" type="number" placeholder="Carisma"></input></label>
                </div>
                <div className="column">
                    <label >percepcion pasiva <input className="input" type="number"></input></label>
                    <label >inspiration <input className="input" name="inspiration" type="checkbox"></input></label>
                    <label >Competencia <input className="input" name="name" type="number" placeholder="Competencia"></input></label>
                </div>
                <div id="inputs-savingThrows" className="column">
                    <label ><input className="input" name="savingStr" type="checkbox" />FUE <input className="input" name="name" type="number" placeholder="Fuerza"></input></label>
                    <label ><input className="input" name="savingDex" type="checkbox" />DES <input className="input" name="name" type="number" placeholder="Destreza"></input></label>
                    <label ><input className="input" name="savingCon" type="checkbox" />CON <input className="input" name="name" type="number" placeholder="Constitución"></input></label>
                    <label ><input className="input" name="savingInt" type="checkbox" />INT <input className="input" name="name" type="number" placeholder="Inteligencia"></input></label>
                    <label ><input className="input" name="savingWis" type="checkbox" />SAB <input className="input" name="name" type="number" placeholder="Sabiduría"></input></label>
                    <label ><input className="input" name="savingCha" type="checkbox" />CAR <input className="input" name="name" type="number" placeholder="Carisma"></input></label>
                </div>

                <div id="inputs-skills" className="column">
                    <label ><input name="acrobacias" type="checkbox" />Acrobacias <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="arcano" type="checkbox" />Arcano <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="atletismo" type="checkbox" />Atletismo <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="engaño" type="checkbox" />Engaño <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="historia" type="checkbox" />Historia <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="interpretacion" type="checkbox" />Interpretación <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="intimidacion" type="checkbox" />Intimidación <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="investigacion" type="checkbox" />Investigación <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="juegoDeManos" type="checkbox" />Juego de manos <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="medicina" type="checkbox" />Medicina <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="naturaleza" type="checkbox" />Naturaleza <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="percepcion" type="checkbox" />Percepción <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="perspicacia" type="checkbox" />Perspicacia <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="persuacion" type="checkbox" />Persuación <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="religion" type="checkbox" />Religión <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="sigilo" type="checkbox" />Sigilo <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="supervivencia" type="checkbox" />Supervivencia <input className="input" name="name" type="number" disabled></input></label>
                    <label ><input name="tratoConAnimales" type="checkbox" />Trato con animales <input className="input" name="name" type="number" disabled></input></label>
                </div>

                <div id="inputs-combatStats" className="column">
                    <label >CA <input className="input" name="classArmor" type="number" placeholder="CA"></input></label>
                    <label >Iniciativa <input className="input"  type="number" placeholder="Iniciativa"></input></label>
                    <label >Velocidad <input className="input" name="velocity" type="number" placeholder="Velocidad"></input></label>
                    <label >Puntos de vida maximos <input className="input" name="hpMax" type="number" placeholder="Vida"></input></label>
                    <label >Puntos de vida actuales <input className="input" name="hpCurrent" type="number" placeholder="Vida actual"></input></label>
                    <label >Puntos de vida temporales <input className="input" name="hpTemp" type="number" placeholder="vida temporal"></input></label>
                    <label >Dados de golpe <input className="input" name="hpDice" type="text" placeholder="vida temporal"></input></label>

                    
                    <label >exitos <input className="input"  type="checkbox"/><input className="input" name="name" type="checkbox"/><input className="input" name="name" type="checkbox"/></label>
                    <label >fallos <input className="input"  type="checkbox"/><input className="input" name="name" type="checkbox"/><input className="input" name="name" type="checkbox"/></label>
                </div>

                <div id="inputs-equipamiento" className="column">
                    <label>pc<input className="input" name="pc" type="number"/></label>
                    <label>pp<input className="input" name="pp" type="number"/></label>
                    <label>po<input className="input" name="po" type="number"/></label>
                    <label>ppl<input className="input" name="ppl" type="number"/></label>
                    <label>equipamiento<textarea  name="equipment" rows="5" cols="5"></textarea></label>

                </div>

                <div id="inputs-caracterisicas" className="column">
                    <label>Caracteristicas <textarea name="characteristics" rows="5" cols="5"></textarea></label>
                </div>
                
                <div id="apariencia" className="column">
                    <label>Apariencia <textarea name="appareance" rows="5" cols="5"></textarea></label>
                </div>
                <div id="backstory" className="column">
                    <label>backstory <textarea name="backstory" rows="5" cols="5"></textarea></label>
                </div>
            </div>
            <input name="name" type="submit" placeholder="amogus" />
        </form>
    )
}

export default CharacterPage;