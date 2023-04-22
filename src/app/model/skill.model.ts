export class Skill{

    id: number;
    titulo_skill: string;
    porcentaje_skill: number;

    constructor(titulo_skill: string, porcentaje_skill: number){
        this.titulo_skill = titulo_skill;
        this.porcentaje_skill = porcentaje_skill;
    }
    
}