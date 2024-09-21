import Product from '../model/product.model.js';
export const addProduct = async (req, res) => {
  const {name, price, image } = req.body;
  if (!name || !price || !image) {
    return res.status(400).json({
      success: false,
      message: 'Please Provide all fields',
    });
  }

  const newProduct = new Product({name, price, image});

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error('Error creating product: ', error.message);
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    })
  }
}

export const deleteProduct = async (req, res) => {
  const {id} = req.params
  try {
    const deletedProduct = await Product.findByIdAndDelete(id)
    // console.log(deletedProduct)
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: `Product with id:${id} not found`,
      });
    }
    res.status(200).json({
      success: true,
      message:"Product Deleted"
    })
  } catch (error) {
    console.error('Error deleting product: ', error.message);
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    })
  }
}