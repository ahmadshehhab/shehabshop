exports.isAuth = (req,res,next)=>{
    if(req.session.userId) next()
    else res.redirect("/login")
} 

exports.notAuth = (req,res,next)=>{
    if(!req.session.userId) next()
    else res.redirect("/")
} 



exports.notupdated = (req,res,next)=>{
    if(!req.session.userId.isupdated) next()
    else res.redirect("/login")
} 

exports.isupdated = (req,res,next)=>{
    if(req.session.userId.isupdated) next()
    else res.redirect("/")
} 