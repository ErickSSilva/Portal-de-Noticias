module.exports=(app)=>{
    app.get('/formularioinclusaonoticia', (req,res)=>{
        app.render('admin/form_add_noticia.ejs')
    })
}