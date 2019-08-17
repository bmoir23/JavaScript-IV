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
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
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
    };
    standup(channel){return`${this.name} announces to ${channel}, @channel standy times!`};
    debugsCode(student, subject){ return `${this.name} debugs` + student + `'s code on` + subject}
};

const bmo = new Person({
    name: "Brian",
    age: 29,
    location: "Knoxville, TN"

})

console.log(bmo.speak());

const Pace = new Instructor({
    name: "Pace",
    age:"32?",
    location:"Meza, AZ",
    specialty: "front-end dev",
    favLanguage: "JavaScript",
    catchPhrase:"secure tha bag!",

})

console.log(Pace.catchPhrase);
console.log(Pace.demo(" constructors"));

const Brian = new Student({
    name: "Brian",
    age:29,
    location:"Knoxville, TN",
    previousBackground: "Marketing",
    className:"WEBPT9",
    favSubjects: ["JS", "CSS", "React"],
})

Brian.listsSubjects();
console.log(Brian.sprintChallenge(" Advance CSS"));
console.log (Brian.PRAssignments(" Responsive Design"));

const Charles = new TL({
    name: "Charles",
    age: " around the same age as Brian?",
    location: "USofA",
    favLanguage: "React",
    catchPhrase:"You Know this!",
    gradClassName: "WEB9?",
    favInstructor: "Pace, because Pace is the only instructor Brian has had.",
})

console.log(Charles.debugsCode(" Brian", " flex-box"));
console.log(Charles.standup("WEBPT9-Charles"));