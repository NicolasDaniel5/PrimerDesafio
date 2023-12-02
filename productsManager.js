class ProductManager {

    constructor(){
        this.products = []
    }

    getProducts(){
        return this.products
    }

    addProduct(product){
        if(!product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock ){
                return 'Faltan llenar campos del productos'
            }
        const result = this.products.find(prod => prod.code === product.code)
        if (result) {
            return 'Existe el producto con ese codigo cambiar'
        }

        if (this.products.length === 0){
            product.id = 1
            this.products.push(product)
        }else{
            product.id = this.products.length + 1
            this.products.push(product)
        }
        
        return 'producto agregado'
    }

    getProductById(pid){
        const result = this.products.find(prod => prod.id === pid )
        if(!result){
            return 'no existe el producto'
        }
        return result
    }
}

const products = new ProductManager()
console.log(products.addProduct({title:'Television 42"',description:'tele hd 4k',price:1000,thumbnail:'img',stock:50,code:'asd123'}))
console.log(products.addProduct({title:'Television 32"',description:'tele hd ',price:800,thumbnail:'img',stock:50,code:'asd456'}))
console.log(products.getProducts())
console.log(products.getProductById(2))
