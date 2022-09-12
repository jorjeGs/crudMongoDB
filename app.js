//Conexion a base de datos
//instale mongoose y nodemon para cada que haga cambios no cerrar el server con el script en json "start"
//primero requerimos el paquete despues de haberlo instalado en el json
const mongoose = require('mongoose')
//modelo para la coleccion users
const UserModel = require('./models/users')

//url para conectarse a la base de datos
const url = 'mongodb+srv://bandito:trench@cluster0.n3kwr.mongodb.net/cliqueDB?retryWrites=true&w=majority'
//mongoose funciona conn compromesas si conectamos pero no damos una respuesta tendremos error, por eso then y catch para errores
mongoose.connect(url, {
})
.then(()=> console.log('Conectado a base de datos ouyeah'))
.catch( (e)=> console.log('Error detectado: ' + e))


//funcion para mostrar datos
const mostrar = async ()=>{
    //para traer toda la coleccion de users, si usamos asyncronos debemos usar await
    //hacemos referencia al modelo de la coleccion
    const users = await UserModel.find() //find para traer todos los resultados
    console.log(users)
}

//funcion para escribir
const escribir = async ()=>{
    //creamos instancia del modelo para crear un nuevo registro base al modelo
    const user = new UserModel({
        nombre:'Mauricio',
        edad:14,
        username:'mauu'
    })
    //save para guardar el registro y res solo para escribir el registro en la consola
    const res = await user.save()
    console.log(res)
}
//funcion reescribir
const actualizar = async (id)=>{
    const user = await UserModel.updateOne({_id:id},
    {
        $set:{
            edad:22,
            username: 'jojis'
        }
    })
}
//funcion eliminar
const eliminar = async (id)=>{
    const user = await UserModel.deleteOne({_id:id})
    console.log(user)
}
//mando a llamar la funcion que muestra todos los datos
//mostrar()
//escribir()
//actualizar('62bd2096e33c793251905123')
//eliminar('62bd2096e33c793251905123')


