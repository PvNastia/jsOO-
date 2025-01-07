
//1
class Account{
    constructor({login, email}){
        this.email= email;
        this.login = login;
        
    }
    getInfo(){
        console.log(`Login: ${this.login}, Email: ${this.email} `);
    };
}
   

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
   });
   

mango.getInfo();
const poly = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly.getInfo();

