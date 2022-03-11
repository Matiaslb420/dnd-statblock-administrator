class Character {
    constructor(){
        this.name = ""
        this.class = ""
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

        this.acrobacias = false
        this.arcano = false
        this.atletismo = false
        this.engaño = false
        this.historia = false
        this.interpretación = false
        this.intimidación = false
        this.investigación = false
        this.juegoDeManos = false
        this.medicina = false
        this.naturaleza = false
        this.percepción = false
        this.perspicacia = false
        this.persuación = false
        this.religión = false
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

        this.whoAmI = ""

        this.proficiencys = ""
        this.languages =""

        this.money = [0,0,0,0]
        this.equipment = ""

        this.characteristics = ""
        this.backstory = ""

    }
}

export default Character;