const fs = require("fs");
const crypto = require("crypto");

class ProductManager {
  constructor() {
    this.path = "./fs/files/products.json";
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
      const product = {
        id: crypto.randomBytes(12).toString("hex"),
        title: data.title,
        photo:
          data.photo ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FfpvUvCBmocfYGwa-EdrH-GEnOaAfmS3aQ&usqp=CAU",
        category: data.category,
        price: data.price,
        stock: data.stock,
      };

      if (!data.stock || !data.title || !data.category || !data.price) {
        console.log("PRODUCTO NO CREADO, INGRESE TODOS LOS DATOS REQUERIDOS.");
      } else {
        let products = await fs.promises.readFile(this.path, "utf-8");
        products = JSON.parse(products);
        products.push(product);
        console.log("Producto Creado");
        products = JSON.stringify(products, null, 2);
        await fs.promises.writeFile(this.path, products);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async read() {
    try {
      let products = await fs.promises.readFile(this.path, "utf-8");
      products = JSON.parse(products);
      if (!products) {
        new Error("ERROR EN LA LECTURA DEL ARRAY");
      } else {
        return products;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async readOne(id) {
    try {
      let products = await fs.promises.readFile(this.path, "utf-8");
      products = JSON.parse(products);
      let product = products.find((each) => each.id === id);
      console.log(product)
      if (!product) {
        throw new Error("NO EXISTE EL PRODUCTO.");
      } else {
        console.log(product)
      return product};

    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      let products = await fs.promises.readFile(this.path, "utf-8");
      products = JSON.parse(products);
      let product = products.find((each) => each.id === id)
      if (!product) {
        throw new Error("NO EXISTEN PRODUCTOS CON ESE ID");
      } else {
        let filtered = products.filter((each) => each.id !== id);
        filtered = JSON.stringify(filtered, null, 2)
        await fs.promises.writeFile(this.path, filtered);
        console.log("PRODUCTO " + id + " ELIMINADO");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

async function testCreate() {
  const gestorDeProductos = new ProductManager();

  await gestorDeProductos.create({
    photo: "img1.jpg",
    title: "Whisky Jack D. Black Label",
    category: "Whisky",
    price: 25000,
    stock: 50,
  });

  await gestorDeProductos.create({
    photo: "img2.jpg",
    title: "Whisky Jack D. Blue Label",
    category: "Whisky",
    price: 207000,
    stock: 80,
  });

  await gestorDeProductos.create({
    photo: "img3.jpg",
    title: "Whisky Jack D. red Label",
    category: "Whisky",
    price: 60000,
    stock: 25,
  });

  await gestorDeProductos.create({
    photo: "img4.jpg",
    title: "Whisky Jack D. Green Label",
    category: "Whisky",
    price: 75000,
    stock: 40,
  });

  await gestorDeProductos.create({
    photo: "img5.jpg",
    title: "Vino Casillero del diablo etiqueta negra",
    category: "Vinos",
    price: 17000,
    stock: 56,
  });

  await gestorDeProductos.create({
    photo: "img6.jpg",
    title: "Vino Adobe Merlot",
    category: "Vinos",
    price: 5500,
    stock: 20,
  });

  await gestorDeProductos.create({
    photo: "img7.jpg",
    title: "Ron Barcelo añejado en roble",
    category: "Destilados",
    price: 8000,
    stock: 30,
  });

  await gestorDeProductos.create({
    photo: "img8.jpg",
    title: "Pack Vasos Shoperos 6",
    category: "Accesorios",
    price: 15000,
    stock: 10,
  });

  await gestorDeProductos.create({
    photo: "img9.jpg",
    title: "Pack 6 vasos de Whisky",
    category: "Accesorios",
    price: 18000,
    stock: 5,
  });

  await gestorDeProductos.create({
    photo: "img10.jpg",
    title: "Shopero 1 liro",
    category: "Accesorios",
    price: 12000,
    stock: 8,
  });

  console.log(await gestorDeProductos.read());
}

async function testRead() {
  const gestorDeProductos = new ProductManager();
  await gestorDeProductos.read()
  console.log(await gestorDeProductos.read())
}

async function testReadOne() {
  const gestorDeProductos = new ProductManager();
  await gestorDeProductos.readOne("844f540d20ff624655dbacff")
  console.log(await gestorDeProductos.readOne())
}

async function testDestroy() {
  const gestorDeProductos = new ProductManager();
  await gestorDeProductos.destroy("38aaf4eb1eb22b1aba8f137d")
  console.log(await gestorDeProductos.readOne())
}

// testCreate()
// testRead()
// testReadOne()
testDestroy()