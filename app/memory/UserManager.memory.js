const MailID1 = "jperez@coder.cl";
const MailID2 = "dcaro@coder.cl";
const MailID3 = "jnavarro@coder.cl";
const MailID4 = "tfuenzalida@coder.cl";
const PassID1 = "123456789";
const PassID2 = "123456";
const PassID3 = "1234";
const PassID4 = "abcdefg";

const crypto = require("crypto");

class UserManager {
  static #users = [];
  create(data) {
    try {
      const user = {
        id: crypto.randomBytes(12).toString("hex"),
        photo:
          data.photo ||
          "NotGet",
        email: data.email,
        password: data.password,
        role: data.role,
      };

      if (!data.email || !data.password || !data.role) {
        console.log("Error de creación de usuario, por favor ingrese todos los datos requeridos.");
      } else {
        UserManager.#users.push(user);
        console.log("Usuario Creado.");
      }
    } catch (error) {
      console.log(error);
    }
  }
  read() {
    try {
      const users = UserManager.#users;
      if (!users) {
        throw new Error("ERROR EN LA LECTURA DEL ARRAY");
      } else {
        return users;
      }
    } catch (error) {
      console.log(error);
    }
  }

  readOne(id) {
    try {
      const user = UserManager.#users.find((each) => each.id === id);
      if (!user) {
        throw new Error("NO EXISTE EL USUARIO.");
      } else {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  destroy(id) {
    try {
      const filtered = UserManager.#users.filter((each) => each.id !== id);
      if (!id) {
        throw new Error("NO EXISTEN USUARIOS CON ESE ID");
      } else {
        UserManager.#users = filtered;
        console.log("USUARIO " + id + " ELIMINADO");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const gestorDeUsuarios = new UserManager();

gestorDeUsuarios.create({
  photo: "img1.jpg",
  email: "jperez@coder.com",
  password: "12345678",
  role: "User",
});

gestorDeUsuarios.create({
  photo: "img2.jpg",
  email: "dcaro@coder.com",
  password: "123abc456",
  role: "User",
});

gestorDeUsuarios.create({
  photo: "img3.jpg",
  email: ".jnavarro@coder.cl",
  password: "a1b2c3",
  role: "User",
});

gestorDeUsuarios.create({
  photo: "img4.jpg",
  email: "tfuenzalida@coder.com",
  password: "1a2b3c4d",
  role: "admin",
});

console.log(gestorDeUsuarios.read());

/*class UserManager {
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
console.log(DetalleMail);*/