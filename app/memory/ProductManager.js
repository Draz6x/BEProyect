const nstock1 = 25;
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
//console.log(NoteManager.#notes);

/*Conjunto de objetos

const obj = {
    nombre: "jp",
    edad: "30",
    ciudad: "santiago",
    color: "Rojo",
    mascota: "perro",
}

CL Operaciones

const exponencial1 = n2 * n1;
console.log(exponencial1);
const exponencial2 = n1 * n2;
console.log(exponencial2);

True False Array

const arrayDeCadenas1 = ["hola", "chao","zzzz"]
console.log(arrayDeCadenas1.includes(c2));
console.log(arrayDeCadenas1.includes(c3));
const arrayDeCadenas2 = ["hola", "chao","zzzz",c1.trim(),c2.trim(),c3.trim()]
console.log(arrayDeCadenas2.includes("holaaaa"));
console.log(arrayDeCadenas2.includes("chaoaaa"));

console.log(Object.keys(obj));
console.log(Object.values(obj));
const arrayDeArrays = Object.entries(obj); 

const {nombre, edad, ...rest } = obj;
console.log(nombre);
console.log(edad);
console.log(rest);

const cadenasYnumeros = { c1, c2, c3, n1, n2, n3};
console.log(cadenasYnumeros);

console.log(arrayDeArrays.flat());
////////////
   */