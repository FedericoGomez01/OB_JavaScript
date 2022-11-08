class Student {
    #name;
    subjects = ["Javascript", "HTML", "CSS"];

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }

    GetData(){
        return { name : this.getName() , subjects  : this.subjects }
    }
}

const student = new Student();
student.setName("Federico");

console.log(student.GetData());