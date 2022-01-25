app.get('/soldiers', (req,res,next) =>{
    res.render('soldiers', {pageTitle: 'soldiers', path:"/"});
});

app.get('/sum-of-soliders', (req,res,next) =>{
    res.render('SumSoldiers', {pageTitle: 'Sum Soldiers',path: "/sumSoldier"});
});