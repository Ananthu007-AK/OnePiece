class employee{
    constructor(name,position,salary){
        this.n1=name;
        this.p1=position;
        this.s1=salary;
    }
    getsalary(){
        document.write("Salary of ",this.n1," is ",this.s1);
    }
}
let el=new employee("Ananthu","Developer",30000)
let sd=new employee("Anhu","Developer",30000)
el.getsalary()
sd.getsalary();