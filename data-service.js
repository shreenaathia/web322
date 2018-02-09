var employees = [];
var departments = [];

var fs = require('fs');


module.exports.initialize = ()=> {
     return new Promise((resolve, reject)=> {
         try{
            fs.readFile('./data/employees.json', (err,data) =>{
                if (err) throw err;
                employees = JSON.parse(data);
                });
         
            fs.readFile('./data/departments.json', (err,data) =>{
                if (err) throw err;
                departments = JSON.parse(data);

            });
        } catch(ex) {
            reject("unable to read file!");
            
        }
        resolve("GOOD!! its successfull!!");

    });
}
    
module.exports.getAllEmployees = () =>
{
    return new Promise((reject, resolve) => {
        
if(employees.length == 0){
    reject("No employees");
}
else {
    resolve(employees);
}

    });
}

module.exports.getManagers = () =>
{
    var manager = [];

    return new Promise((reject, resolve) => {
      
        if(employees.length == 0){
            reject("No employees");
        }
        else {
        for( var i = 0; i < employees.length; i++){
            if(employees[i].isManager == true){
                manager.push(employees[i]);
            }

        }
    resolve(manager);

    }
    });
}



module.exports.getDepartments = () => {

    return new Promise((reject, resolve) => {

        if(departments.length == 0){

            reject(" No departments");
        }
        else {

            resolve(departments);
        }


    });
}