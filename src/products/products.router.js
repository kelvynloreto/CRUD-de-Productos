const router = require('express').Router()

const productsServices = require('./products.services')


router.get('/', productsServices.getAllProducts) 
router.post('/', productsServices.postNewProduct) 

router.get('/:id', productsServices.getProductById) 
router.delete('/:id', productsServices.deleteProduct) 
router.patch('/:id', productsServices.patchProduct) 

module.exports = router
