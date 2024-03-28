const fs = require("fs");
const crypto = require("crypto");

class UserManager {
  constructor() {
    this.path = "./fs/files/users.json";
    this.init();
  }
  init() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      const stringData = JSON.stringify([], null, 2);
      fs.writeFileSync(this.path, stringData);
      console.log("ARCHIVO CREADO");
    } else {
      console.log("ARCHIVO YA EXISTE");
    }
  }

  async create(data) {
    try {
      const user = {
        id: crypto.randomBytes(12).toString("hex"),
        photo:
          data.photo ||
          "NextGen",
        email: data.email,
        password: data.password,
        role: data.role,
      };

      if (!data.email || !data.password || !data.role) {
        console.log("USUARIO NO CREADO, INGRESE TODOS LOS DATOS REQUERIDOS.");
      } else {
        let users = await fs.promises.readFile(this.path, "utf-8");
        users = JSON.parse(users);
        users.push(user);
        console.log("Usuario Creado");
        users = JSON.stringify(users, null, 2);
        await fs.promises.writeFile(this.path, users);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async read() {
    try {
      let users = await fs.promises.readFile(this.path, "utf-8");
      users = JSON.parse(users);
      if (!users) {
        new Error("ERROR EN LA LECTURA DEL ARRAY");
      } else {
        return users;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async readOne(id) {
    try {
      let users = await fs.promises.readFile(this.path, "utf-8");
      users = JSON.parse(users);
      let user = users.find((each) => each.id === id);
      console.log(user)
      if (!user) {
        throw new Error("NO EXISTE EL USUARIO.");
      } else {
        console.log(user)
      return user};

    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      let users = await fs.promises.readFile(this.path, "utf-8");
      users = JSON.parse(users);
      let user = users.find((each) => each.id === id)
      if (!user) {
        throw new Error("NO EXISTEN USUARIOS CON ESE ID");
      } else {
        let filtered = users.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2)
        await fs.promises.writeFile(this.path, filtered);
        console.log("USUARIO " + id + " ELIMINADO");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function testCreate() {
  const gestorDeUsuarios = new UserManager();
  await gestorDeUsuarios.create({
    photo: "img1.jpg",
    email: "jperez@coder.com",
    password: "12345678",
    role: "user",
  });

  await gestorDeUsuarios.create({
    photo: "img2.jpg",
    email: "dcaro@coder.com",
    password: "123abc456",
    role: "user",
  });

  await gestorDeUsuarios.create({
    photo: "img3.jpg",
    email: ".jnavarro@coder.cl",
    password: "a1b2c3",
    role: "user",
  });

  await gestorDeUsuarios.create({
    photo: "img4.jpg",
    email: "tfuenzalida@coder.com",
    password: "1a2b3c4d",
    role: "admin",
  });
  console.log(await gestorDeUsuarios.read());
}


async function testRead() {
  const gestorDeUsuarios = new UserManager();
  await gestorDeUsuarios.read()
  console.log(await gestorDeUsuarios.read())
}

async function testReadOne() {
  const gestorDeUsuarios = new UserManager();
  await gestorDeUsuarios.readOne("0799b9ef85aac950d128ca3b")
  console.log(await gestorDeUsuarios.readOne())
}

async function testDestroy() {
  const gestorDeUsuarios = new UserManager();
  await gestorDeUsuarios.destroy("f67970416bcef25ba0d54fc1")
  console.log(await gestorDeUsuarios.readOne())
}

testCreate()