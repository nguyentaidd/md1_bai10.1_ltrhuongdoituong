class Animal {
    id;
    name;
    color;

    constructor(id,name,color) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setColor(color){
        this.color = color;
    }
    getColor(){
        return this.color;
    }
}