import { Employee } from "src/entities/employee.entity";
import { DataSource, EntityManager } from "typeorm";
let dataSource:DataSource;
const getDatabaseConnection = async (): Promise<EntityManager> =>{
    if(dataSource && dataSource.isInitialized){
        console.log('Already Connection Created! Using Same Connection!');
        return dataSource.manager;
    }else{
        console.log('No DB Connection Found! Creating New Connection!');
        dataSource=new DataSource({
            type:'mysql',
            host:process.env.DBHOSTNAME,
            port:+process.env.DBPORT,
            database:process.env.DBNAME,
            username:process.env.DBUSERNAME,
            password:process.env.DBPASSWORD,
            connectTimeout:30000,
            synchronize:true,
            logging:false,
            entities:[Employee]
        });
        return await dataSource.initialize().then(()=>{
            console.trace('New DB Created!');
            return dataSource.manager;
        }).catch((e)=>{
            console.debug(e,'Error Occured in DB creation');
            throw new Error(e);
        });
    }
}
export{getDatabaseConnection};