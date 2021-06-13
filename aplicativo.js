//const mongoose = requiere('mongoose')
var mongoose = require('mongoose');

const url = 'mongodb://localhost/bdmovies'

mongoose.connect(url,{

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

})



.then( ()=> console.log('conectado a mongo') )
.catch( (e)=> console.log('error de conexion es: ' + e) )

const movieSchema = mongoose.Schema({
    name:String,
    director:Number,
    clasification:String
},{versionKey: false})

const movieModel = mongoose.model('tbpeliculas', movieSchema)

//Mostrar
const mostrar = async ()=>{
    const movie = await movieModel.find()
    console.log(movie)
}

//mostrar()

//crear
const crear = async ()=>{
  const movie = new movieModel({
      name: 'acela',
      director: 2,
      clasification: 'accion'
  })
  const resultado = await movie.save()
  console.log(resultado)
}

//crear()

//editar
const actualizar = async (id)=>{
    const movie = await movieModel.updateOne({_id:id},
        
        {
            $set:{
                name:'acela modificada',
                clasification:'accion modificada'
            }
        }
        
        )
}

//actualizar('60c65c5e3a0de43d207353dc')

const eliminar = async (id)=>{
    const movie = await movieModel.deleteOne({_id:id})
    console.log(movie)
}

eliminar('60c65e19ed045a2064ab5e7a')