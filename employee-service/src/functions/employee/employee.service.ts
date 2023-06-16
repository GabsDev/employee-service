import { getDatabaseConnection } from "@libs/database-manager";
import { Employee } from "src/entities/employee.entity";
const create=async(employee:Employee):Promise<Employee>=>{
    const employeeRepository= await ( await getDatabaseConnection()).getRepository(Employee);
    const newEmployee:Employee=await employeeRepository.save(employee).catch((e)=>{console.error('Failed to Create Employee. Please try Again...',e);
        throw new Error(e);
    });
    return newEmployee;
}
const fetch=async(employeeId:string):Promise<Employee>=>{
    const employeeRepository= await ( await getDatabaseConnection()).getRepository(Employee);
    const newEmployee:Employee=await employeeRepository.findOneBy({id:employeeId}).catch((e)=>{console.error('Failed to Find Employee. Please Enter Valid Employee ID...',e);
        throw new Error(e);
    });
    return newEmployee;
}
const fetchAll=async():Promise<Employee[]>=>{
    const employeeRepository= await ( await getDatabaseConnection()).getRepository(Employee);
    const employees:Employee[]=await employeeRepository.find().catch((e)=>{console.error('Failed to Find Employees. Database is Empty...',e);
        throw new Error(e);
    });
    return employees;
}
export{create,fetch,fetchAll};