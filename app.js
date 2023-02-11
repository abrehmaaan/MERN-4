import express from 'express'
const app = express()
app.set('views', './views')
app.set('view engine','pug')
app.get('/',(req, res)=>{
    res.render('index')
})
app.get('/london',(req, res)=>{
    res.render('london',{
        cityName: "London",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sed reiciendis suscipit quibusdam libero itaque, similique temporibus dolore ipsum tenetur voluptate facilis repellat eaque aspernatur. Unde nam quasi quibusdam! In!"
    })
})
app.get('/tokyo',(req, res)=>{
    res.render('tokyo',{
        cityName: "Tokyo",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sed reiciendis suscipit quibusdam libero itaque, similique temporibus dolore ipsum tenetur voluptate facilis repellat eaque aspernatur. Unde nam quasi quibusdam! In!"
    })
})
app.get('/paris',(req, res)=>{
    res.render('paris',{
        cityName: "Paris",
        detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sed reiciendis suscipit quibusdam libero itaque, similique temporibus dolore ipsum tenetur voluptate facilis repellat eaque aspernatur. Unde nam quasi quibusdam! In!"
    })
})
app.get('/movies',(req, res)=>{
    let movies = [
        {
            id: 1,
            name: "The Shawshank Redemption",
            rating: 9.2
        },
        {
            id: 2,
            name: "The GodFather",
            rating: 9.2
        },{
            id: 3,
            name: "The Dark Night",
            rating: 9.5
        },{
            id: 4,
            name: "12 Angry Men",
            rating: 8.9
        },{
            id: 5,
            name: "Schindler's List",
            rating: 8.9
        },
    ]
    res.render('movies',{
        movies: movies
    })
})
app.listen(8080, ()=>{
    console.log("Server Running...")
})