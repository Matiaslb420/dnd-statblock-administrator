class Character {
    constructor(){
        this.name = ""
        this.className = ""
        this.level = 1
        this.race = ""
        this.background = ""
        
        this.str = 10
        this.dex = 10
        this.con = 10
        this.int = 10
        this.wis = 10
        this.cha = 10
        
        this.inspiration = false
        this.proficiency = 0

        this.acrobacias = false
        this.arcano = false
        this.atletismo = false
        this.engaño = false
        this.historia = false
        this.interpretacion = false
        this.intimidacion = false
        this.investigacion = false
        this.juegoDeManos = false
        this.medicina = false
        this.naturaleza = false
        this.percepcion = false
        this.perspicacia = false
        this.persuacion = false
        this.religion = false
        this.sigilo = false
        this.supervivencia = false
        this.tratoConAnimales = false
        
        this.savingStr = false;
        this.savingDex = false;
        this.savingCon = false;
        this.savingInt = false;
        this.savingWis = false;
        this.savingCha = false;
        
        this.classArmor = 10
        this.velocity = 30
        this.hpMax = 0
        this.hpCurrent = 0
        this.hpTemp = 0
        this.hpDice = ""


        this.proficiencys = ""
        this.languages =""

        

        this.pc = 0
        this.pp = 0
        this.po = 0
        this.ppl = 0
        this.equipment = ""


        this.characteristics = ""
        this.appareance = ""
        this.backstory = ""

    }
}

export default Character;