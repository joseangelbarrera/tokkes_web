function addToCart (req,res) {
  
  let { _id, telf } = req.body

  let cart = req.session.cart
  cart[_id] = { _id, telf } 
  
  res.render('index', { cart })

}