function getLegal (req, res) { 
	req.session.destroy()
	res.render('forms/legal.pug') 
}

module.exports =  getLegal