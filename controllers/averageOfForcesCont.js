    //sum soldiers
    exports.getAverageOfForces = (req,res,next) =>{
        force_Id = req.params.force_Id;

        res.render('averageOfForces', {pageTitle: 'Avarage Of Forces',path: "/",force_Id});
        
    };
    exports.getAverageOfForcesByID = (req,res,next) =>{

        force_Id = req.params.force_Id;
        res.render('averageOfForces', {pageTitle: 'Avarage Of Forces',path: "/",force_Id});
    };