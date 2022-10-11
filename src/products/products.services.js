const productsController = require('./products.controllers');

const getAllProducts = (req, res) => {
    productsController.getAllProducts()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch(err => res.status(400).json({ message: err.message }))
};

const postNewProduct = (req, res) => {
    const data = req.body;
    if (data.name && data.category && data.price) {
        productsController.createNewProducts(data)
            .then((product) => {
                res.status(201).json(product)
            })
            .catch(err => res.status(400).json({ message: err.message }))
    }
    else {
        res.status(400).json({ message: 'Missing data' })
    }
};

const getProductById = (req, res) => {
    const id = req.params.id

    productsController.getProductById(id)
        .then(product => {
            if (product) {
                res.status(200).json(product)
            }
            else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(404).json({ message: err.message })
        })
};

const patchProduct= (req, res) => {
    const id = req.params.id
    const {name, category, price, isAvailable} = req.body
  
  productsController.editProduct(id, {name, category, price, isAvailable})
    .then(product => {
      if (product[0]) {
        res.status(200).json({message: `Movie with id: ${id} , edit succesfully`})
      }
      else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err=> res.status(400).json({message: err.message}))
  }


const deleteProduct = (req, res) => {
    const id = req.params.id
    productsController.deleteOneProduct(id)
        .then(product => {
            if (product) {
                res.status(204).json(product)
            }
            else {
                res.status(404).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => res.status(400).json({ message: err.message }))
}

module.exports = {
    getAllProducts,
    postNewProduct,
    getProductById,
    patchProduct,
    deleteProduct
}