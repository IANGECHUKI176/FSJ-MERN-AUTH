exports.getPrivateData=async(req,res,next)=>{
    res.status(200).json({success:true,data:"you have access to this private data"})
}