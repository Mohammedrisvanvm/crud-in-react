const notfound=(req,res,next)=>{
    const error=new Error(`Not Found-${req.orifinalUrl}`);
    res.status(404);
    next(error)
}

const errorHandler=(err,req,res,next)=>{
    let statusCode=res.statusCode===200?500:res.statusCode;
    let message=err.message
    if(err.name==='castError'&& err.kind ==='objectId' ){
        statusCode=404;
        message='Resourse not found'
    }
}