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
    console.error('Error creating product!: ', error.message);
    res.status(500).json({
      success: false,
      message: `Server error: ${error.message}`,
    })
  }
}
