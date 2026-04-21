exports.sendReqParam = (req,res)=>{
    let veg = req.params.vegetable;
    res.send(`Ths is the page for ${veg}`)
}