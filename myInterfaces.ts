interface Employee {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    startTrail: () => string,
    getCoupon(value:number):number
}

interface Employee{
    githubToken:string //reopening of the interface
}

//inheritance
interface EmployeeChild extends Employee{
   role:"admin" | "ta" | "learner"
}

const amit: Employee = {
    dbId: 12, email: "email@gmail.com", userId: 137,
    githubToken:"123github",
    startTrail: () => {
        return "trial started"
    },
    getCoupon:(val:10)=>{
        return 12
    }
}

//it will have role too
const sumit:EmployeeChild={
    dbId:13,
    email:"sumit@gmail.com",
    userId:1211,
    role:"admin",
    githubToken:"12githubtoken2",
    startTrail:()=>{
        return "trial started"
    },
    getCoupon:(val :15)=>{
        return 12;
    }
}




export {}