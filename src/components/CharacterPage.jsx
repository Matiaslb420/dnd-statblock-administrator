import React, { useContext } from "react";
import { CharContext } from "../contexts/CharacterContext";
import axios from "axios";
import fullBody from "../assets/fullBody.png"


const CharacterPage = () => {
    const character = useContext(CharContext)

    const updateCharacter = (e) => {
        e.preventDefault()
        /* axios.post('http://localhost:8000/api/...', ) */ //falta la ruta
        /* for( let i = 0; i < 91; i++){
            console.log(i, e.currentTarget[i])
        } */
    }

    return (
        <form id="form-character" onSubmit={updateCharacter}>
            <div id="inputs-identity" className="">
                    <label >Nombre <input className="is-large" name="name" type="text" placeholder="Nombre del personaje"></input></label>
                    <label className="">Clase <input className="is-medium" name="className" type="text" placeholder="Clase del personaje"></input></label>
                    <label className=" is-one-fifth">nivel <input className="is-medium" name="level" type="number" placeholder="Nivel del personaje"></input></label>
                    <label >Raza <input className="" name="race" type="text" placeholder="Raza del personaje"></input></label>
                    <label >Trasfondo <input className="" name="background" type="text" placeholder="Trasfondo del personaje"></input></label>
            </div>
            <div id="inputs-handyInfoRp">
                <p><label >lenguajes <textarea id="input-lenguajes" className="has-fixed-size" name="languages" rows="5" cols="5"></textarea></label></p>
                <p><label >competencias de equipo <textarea id="input-competencias" className=" has-fixed-size"  name="proficiencys" rows="5" cols="5"></textarea></label></p>
            </div>
            <div id="inputs-fullBody">
                <figure id="fullBody">
                    <img src={fullBody} alt="" />
                </figure>
            </div>
            <div id="inputs-stats" className="">
                <label >FUE <input className="" name="str" type="number" placeholder="Fuerza"></input></label>
                <label >DES <input className="" name="dex" type="number" placeholder="Destreza"></input></label>
                <label >CON <input className="" name="cos" type="number" placeholder="Constitución"></input></label>
                <label >INT <input className="" name="int" type="number" placeholder="Inteligencia"></input></label>
                <label >SAB <input className="" name="wis" type="number" placeholder="Sabiduría"></input></label>
                <label >CAR <input className="" name="cha" type="number" placeholder="Carisma"></input></label>
            </div>
            <div id="input-neatThings">
                {/* <label >percepcion pasiva <input className="" type="number"></input></label>
                <label >inspiration <input className="" name="inspiration" type="checkbox"></input></label>
                <label >Competencia <input className="" name="name" type="number" placeholder="Competencia"></input></label> */}
            </div>
            <div id="inputs-savingThrows" className="">
                <label ><input className="" name="savingStr" type="checkbox" />FUE <input className="" name="name" type="number" placeholder="Fuerza"></input></label>
                <label ><input className="" name="savingDex" type="checkbox" />DES <input className="" name="name" type="number" placeholder="Destreza"></input></label>
                <label ><input className="" name="savingCon" type="checkbox" />CON <input className="" name="name" type="number" placeholder="Constitución"></input></label>
                <label ><input className="" name="savingInt" type="checkbox" />INT <input className="" name="name" type="number" placeholder="Inteligencia"></input></label>
                <label ><input className="" name="savingWis" type="checkbox" />SAB <input className="" name="name" type="number" placeholder="Sabiduría"></input></label>
                <label ><input className="" name="savingCha" type="checkbox" />CAR <input className="" name="name" type="number" placeholder="Carisma"></input></label>
            </div>
            <div id="inputs-skills" className="">
                <label ><input name="acrobacias" type="checkbox" />Acrobacias <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="arcano" type="checkbox" />Arcano <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="atletismo" type="checkbox" />Atletismo <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="engaño" type="checkbox" />Engaño <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="historia" type="checkbox" />Historia <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="interpretacion" type="checkbox" />Interpretación <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="intimidacion" type="checkbox" />Intimidación <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="investigacion" type="checkbox" />Investigación <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="juegoDeManos" type="checkbox" />Juego de manos <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="medicina" type="checkbox" />Medicina <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="naturaleza" type="checkbox" />Naturaleza <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="percepcion" type="checkbox" />Percepción <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="perspicacia" type="checkbox" />Perspicacia <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="persuacion" type="checkbox" />Persuación <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="religion" type="checkbox" />Religión <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="sigilo" type="checkbox" />Sigilo <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="supervivencia" type="checkbox" />Supervivencia <input className="" name="name" type="number" disabled></input></label>
                <label ><input name="tratoConAnimales" type="checkbox" />Trato con animales <input className="" name="name" type="number" disabled></input></label>
            </div>
            <div id="inputs-combatStats" className="">
                <label >CA <input className="" name="classArmor" type="number" placeholder="CA"></input></label>
                <label >Iniciativa <input className=""  type="number" placeholder="Iniciativa"></input></label>
                <label >Velocidad <input className="" name="velocity" type="number" placeholder="Velocidad"></input></label>
                <label >Puntos de vida maximos <input className="" name="hpMax" type="number" placeholder="Vida"></input></label>
                <label >Puntos de vida actuales <input className="" name="hpCurrent" type="number" placeholder="Vida actual"></input></label>
                <label >Puntos de vida temporales <input className="" name="hpTemp" type="number" placeholder="vida temporal"></input></label>
                <label >Dados de golpe <input className="" name="hpDice" type="text" placeholder="vida temporal"></input></label>

                
                <label >exitos <input className=""  type="checkbox"/><input className="" name="name" type="checkbox"/><input className="" name="name" type="checkbox"/></label>
                <label >fallos <input className=""  type="checkbox"/><input className="" name="name" type="checkbox"/><input className="" name="name" type="checkbox"/></label>
            </div>
            <div id="inputs-equipment" className="">
                {/* <label>pc<input className="" name="pc" type="number"/></label>
                <label>pp<input className="" name="pp" type="number"/></label>
                <label>po<input className="" name="po" type="number"/></label>
                <label>ppl<input className="" name="ppl" type="number"/></label> */}
                {/* <label>equipamiento<textarea  name="equipment" rows="5" cols="5"></textarea></label> */}

            </div>
            <div id="inputs-characteristics">
                {/* <div id="inputs-caracterisicas" className="">
                    <label>Caracteristicas <textarea name="characteristics" rows="5" cols="5"></textarea></label>
                </div>
                    
                <div id="apariencia" className="">
                    <label>Apariencia <textarea name="appareance" rows="5" cols="5"></textarea></label>
                </div>
                <div id="backstory" className="">
                    <label>backstory <textarea name="backstory" rows="5" cols="5"></textarea></label>
                </div> */}
            </div>
            {/* <input name="name" type="submit"  /> */}
        </form>
    )
}

export default CharacterPage;