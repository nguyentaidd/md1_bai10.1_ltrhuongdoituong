class Cat extends Animal{
    weight;
    constructor(id,name,color,weight) {
        super(id,name,color);
        this.weight = weight;
    }
    setWeight(weight){
        this.weight =weight;
    }
    getWeight(){
        return this.weight;
    }
}