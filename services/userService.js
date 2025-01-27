// LOS SERVICIOS SE USAN PARA HACER LLAMADAS A APLICACIONES/SERVIDORES EXTERNAS (BBDD; API; ETC)
// ESTE SERVICIO LLAMA A DONDE ESTAN LOS USUARIOS (NORMALMENTE EN UNA BBDD; EN ESTE CASO EN /data)

//? FUNCION PARA VALIDAR EL USUARIO ---> CON USERNAME Y PASSWORD


const users = require('../data/users') // coneccion a nuestra bbdd ficticia
const bcrypt = require('bcrypt') // vamos a usar el metodo de bcrypt.compareSync -- > compara las contraseñas

const validateUser = (username, password)  => {
    
    //buscar el usuario por Username
    const user = users.find( user => user.username === username)

    //encripta la password del usuario con el metodo de bcrypt
    const passwordHashed = bcrypt.hashSync(user.password, 10)

       //* si el usuario existe --> compara la contraseña dada por el usuario con la de /data/users.js
    if (user && bcrypt.compareSync(password, passwordHashed)) {
        //* si el usuario y la contraseña coinciden --> me devuelve el user
        return user       
    } else {
         //* si el usuario y la contraseña no coinciden --> devuelve null (luego vamos a hacer algo con este null en /controllers)
        return null
    }
}

//! UNA VEZ QUE SE VALIDA EL USUARIO, SE VA AL MIDDLEWARE

module.exports = { validateUser }