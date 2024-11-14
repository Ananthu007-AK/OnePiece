class person{
    constructor(name,age){
        this.n1=name
        this.a1=age
    }
greet(){
    document.write("Hello "+ this.n1 + this.a1)
}
}
class student extends person{
    constructor(name,age,place){
        this.n1=name;
        this.a1=age;
        this.p1=place;
    }

}
let student1=new student("Anna ",21,"kochi")
student1.greet()
