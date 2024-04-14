import faker from "faker";
import Boom from "@hapi/boom";
class ProductService {
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }
  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 5000)
    })
  }
  async findOne(id) {
    const product = this.products.find(item => item.id == id)
    if (!product){
      throw Boom.notFound('Product not found')
    }
    if(product.isBlock){
      throw Boom.conflict('Product is block')
    }
    return product
  }

  async update(id, changes) {
    try {
      const index = this.products.findIndex(item => item.id == id)
      if (index === -1) throw Boom.notFound('Producto not found')
      const product = this.products[index]
      this.products[index] = {
        ...product,
        ...changes
      }
      return this.products[index]
    }
    catch (err) {
      throw new Error(err)
    }
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id == id)
    if (index === -1) {
      throw Boom.notFound('Product not found')
    }
    this.products.splice(index, 1)
    return { message: true }
  }
  generate() {
    const limit = 100
    for (let index = 0; index < limit; index++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        id: index,
        isBlock: faker.datatype.boolean()
      })
    }
  }
  constructor() {
    this.products = [];
    this.generate()
  }
}

export default ProductService
