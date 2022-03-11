import { createContext, useState } from "react";
import Character from "../commons/CharacterPage"

const Char = JSON.parse(localStorage.getItem('Character')) || new Character();

const charContextDefaultValues = {
    character: Char,
    editCharacter: () => null,
  };

export const CharContext = createContext(charContextDefaultValues);

const CharContextProvider = ({ children }) => {
    const [currentCharacter, setCurrentCharacter] = useState(charContextDefaultValues);
  
    const editCharacter = (character) =>{
        setCurrentCharacter({
        character: character,
      });
      return character;
    }
  
    return <CharContext.Provider value={{...currentCharacter, editCharacter}}>{children}</CharContext.Provider>
  };

  export default CharContextProvider;