const dbConnection = require('../../config/dbConnection');
module.exports = (app)=>{

    var connection = dbConnection();
    app.get('/noticias', (req,res)=>{

        connection.query('select * from noticias', (error, result)=>{
            if(error){
                console.log(error);
            }
            res.render('noticias/noticias.ejs', {noticias:result})
        })
    })
}