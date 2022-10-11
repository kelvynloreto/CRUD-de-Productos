const Products = require('../models/products.model');
const uuid = require('uuid');

const getAllProducts = async () => {
    const data = await Products.findAll();
    return data
};

const createNewProducts = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable || false
    })
    return newProduct
};
// createNewProducts({
//     name: 'cow meat',
//     category: 'foot',
//     price: 8 
    
// })
// .then(res => console.log(res))
// .catch(err => console.log(err))


const getProductById = async (id) => {
    const data = await Products.findOne({
        where: {
            id
        }
    })
    return data

};

const editProduct = async (id, data)=>{
    const response = await Products.update(data , {
        where: {
            id // == id : id
        }
    })
    return response  //* si el where no encuentra nada retorna null
    }

const deleteOneProduct = async (id)=>{
    const data = await Products.destroy({
        where:{
            id 
        }
    })
    return data
}


module.exports= {
getAllProducts,
createNewProducts,
getProductById,
editProduct,
deleteOneProduct
}
