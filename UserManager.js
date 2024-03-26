const MailID1 = "jperez@coder.cl";
const MailID2 = "dcaro@coder.cl";
const MailID3 = "jnavarro@coder.cl";
const MailID4 = "tfuenzalida@coder.cl";
const PassID1 = "123456789";
const PassID2 = "123456";
const PassID3 = "1234";
const PassID4 = "abcdefg";

class UserManager {
    static quantity = 0;
    static #user = [ ];
    create(data) {
const user = {
    id: 
        UserManager.quantity === 0 
      ? 1 
      : UserManager.#user[UserManager.quantity - 1].id+1,
    type: data.type || "Nombre Usuario:",
    text: data.text || "Rol Usuario"
        };
    !data.text 
      ?  console.log("ingrese usuario")
      : UserManager.#user.push(user) && UserManager.quantity++;   
    }
    read(){
        return UserManager.#user
    }
    
}
const notes = new UserManager();
    notes.create({text: "Juan Perez Rodriguez"});
    notes.create({text: "David Caro Arriagada"});
    notes.create({text: "Jose Navarro Navarro"});
    notes.create({text: "Tomás Fuenzalida Huinca"});
     
    
console.log(notes.read());
const DetalleContraseña = { PassID1, PassID2, PassID3, PassID4} 
console.log(DetalleContraseña);
const DetalleMail = {MailID1, MailID2, MailID3, MailID4} 
console.log(DetalleMail);