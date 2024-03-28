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
