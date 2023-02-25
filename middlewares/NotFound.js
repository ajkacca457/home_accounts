const NotFound= (req,res)=>{
    res.status(404).json({
        message:"Route doesnt exists"
    })
}

export default NotFound;