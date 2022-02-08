

exports.gettopSoldiers = (req,res,next) =>{
    U_id = req.params.U_id
    res.render('TopSoldiers', {pageTitle: 'Top Soldiers',path: "/", U_id});
    
};
exports.gettopSoldiersById = (req,res,next) =>{

    U_id = req.params.U_id
    
    res.render('TopSoldiers', {pageTitle: 'Top Soldiers',path: "/", U_id});
    
};