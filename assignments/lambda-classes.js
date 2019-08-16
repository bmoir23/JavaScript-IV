// CODE here for your Lambda Classes
class Person{
    constructor(personProps){
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
    };
    speak(){return `Hello my name is ${this.name}, I am from ${this.location}`};
};

class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.specialty;
        this.catchPhrase = instructorProps.catchPhrase;
};

demo(subject) {return `Today we are learning about` + subject};
grade(student, subject){return student = `receives a perfect score on` + subject};
};

class Student extends Person{
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = StudentProps.previousBackground;
        thisclassName = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
    };

    listsSubjects(){
        for( let i = 0; i< this.favSubjects.length; i++){
            console.log(`${this.name} loves ${this.favSubjects[i]}`);
        }
    }
PRAssignments(subject){return `${this.name} has submitted a PR for` + subject};
sprintChallenge(subject){return `${this.name} has begun the sprint challenge on` + subject};

};

class TL extends Instructor{
    constructor(TLProps){
        super(TLProps);
        this.gradClassName = TL.gradClassName;
        this.favInstructor = TLProps.favInstructor;
    }
    
}

