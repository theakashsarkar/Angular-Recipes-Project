export class Recipe {
    public name:String;
    public description:String;
    public imagePath:String;

    constructor(name:string,des:string,imagePath:string){
        this.name = name;
        this.description = des;
        this.imagePath = imagePath;
    }
}