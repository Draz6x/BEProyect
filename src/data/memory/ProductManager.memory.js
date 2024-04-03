const crypto = require("crypto");

class ProductManager {
  static #products = [];
  create(data) {
    try {
      const product = {
        id: crypto.randomBytes(12).toString("hex"),
        title: data.title,
        photo:
          data.photo ||
          "NextGen",
        category: data.category,
        price: data.price,
        stock: data.stock,
      };

      if (!data.stock || !data.title || !data.category || !data.price) {
        console.log("Error al crear producto, por favor ingrese todos los datos requeridos.");
      } else {
        ProductManager.#products.push(product);
        console.log("Producto Creado");
      }
    } catch (error) {
      console.log(error);
    }
  }
  read() {
    try {
      const products = ProductManager.#products;
      if (!products) {
        throw new Error("ERROR EN LA LECTURA DEL ARRAY");
      } else {
        return products;
      }
    } catch (error) {
      console.log(error);
    }
  }

  readOne(id) {
    try {
      const product = ProductManager.#products.find((each) => each.id === id);
      if (!product) {
        throw new Error("NO EXISTE EL PRODUCTO");
      } else {
        return product;
      }
    } catch (error) {
      console.log(error);
    }
  }

  destroy(id) {
    try {
      const filtered = ProductManager.#products.filter(
        (each) => each.id !== id
      );
      if (!id) {
        throw new Error("NO EXISTE USUARIO CON ESE ID");
      } else {
        ProductManager.#products = filtered;
        console.log("USUARIO" + id + " ELIMINADO");
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const gestorDeProductos = new ProductManager();

gestorDeProductos.create({
  photo: "img1.jpg",
  title: "Whisky Jack D. Black Label",
  category: "Whisky",
  price: 25000,
  stock: 50,
});

gestorDeProductos.create({
  photo: "img2.jpg",
  title: "Whisky Jack D. Blue Label",
  category: "Whisky",
  price: 207000,
  stock: 80,
});

gestorDeProductos.create({
  photo: "img3.jpg",
  title: "Whisky Jack D. red Label",
  category: "Whisky",
  price: 60000,
  stock: 25,
});

gestorDeProductos.create({
  photo: "img4.jpg",
  title: "Whisky Jack D. Green Label",
  category: "Whisky",
  price: 75000,
  stock: 40,
});

gestorDeProductos.create({
  photo: "img5.jpg",
  title: "Vino Casillero del diablo etiqueta negra",
  category: "Vinos",
  price: 17000,
  stock: 56,
});

gestorDeProductos.create({
  photo: "img6.jpg",
  title: "Vino Adobe Merlot",
  category: "Vinos",
  price: 5500,
  stock: 20,
});

gestorDeProductos.create({
  photo: "img7.jpg",
  title: "Ron Barcelo añejado en roble",
  category: "Destilados",
  price: 8000,
  stock: 30,
});

gestorDeProductos.create({
  photo: "img8.jpg",
  title: "Pack Vasos Shoperos 6",
  category: "Accesorios",
  price: 15000,
  stock: 10,
});

gestorDeProductos.create({
  photo: "img9.jpg",
  title: "Pack 6 vasos de Whisky",
  category: "Accesorios",
  price: 18000,
  stock: 5,
});

gestorDeProductos.create({
  photo: "img10.jpg",
  title: "Shopero 1 liro",
  category: "Accesorios",
  price: 12000,
  stock: 8,
});

console.log(gestorDeProductos.read());

/*const nstock1 = 25;
const nstock2 = 5;
const nstock3 = 50;
const nstock4 = 60;
const P1 = "10000";
const P2 = "20000";
const P3 = "30000";
const P4 = "40000";

class ProductManager {
    static quantity = 0;
    static #product = [ ];
    create(data) {
        const product = {
    id: 
      ProductManager.quantity === 0 
      ? 1 
      : ProductManager.#product[ProductManager.quantity - 1].id+1,
    type: data.type || "Producto:",
    text: data.text
        };
    !data.text 
      ?  console.log("ingrese texto")
      : ProductManager.#product.push(product) && ProductManager.quantity++;   
      
      
    }
   
    read(){
        return ProductManager.#product
    }
    
}
 
const notes = new ProductManager();
    notes.create({text: "Whyskey Jack D. Black Label"});
    notes.create({text: "Whyskey Jack D. Red Label"});
    notes.create({text: "Whyskey Jack D. Blue Label"});
    notes.create({text: "Whyskey Jack D. Green Label"});
     
    
console.log(notes.read());
const preciosYstock = { P1, P2, P3, P4, nstock1, nstock2, nstock3, nstock4} 
console.log(preciosYstock);
*/