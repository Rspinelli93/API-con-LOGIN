//* AQUI ESTA LA UTILIDAD DE GENERAR UNA CLAVE ALEATORIA CON CRYPTO Y ENCRIPTARLA CON BCRYPT

const crypto = require('crypto') // VIENE DE NODE; NO HACE FALTA INSTALARLA
const bcrypt = require('bcrypt') // DEPENDENCIA EXTERNA; HAY QUE INSTALARLA


// generar el secreto, la clave es secreta
const secret = crypto.randomBytes(64).toString('hex'); //CREA UNA CLAVE ALEATORIA DE 64 BYTES EN FORMA EXADECIMAL

// encriptamos la contraseña, hashear la contraseña (el Syinc hace la funcion asincrona, sin el Syinc es una funcion normal)
const hashedSecret = bcrypt.hashSync(secret, 10); //ENCRIPTA LA CLAVE SECRETA CON BCRYPT Y DA DIEZ SALTOS


module.exports = { hashedSecret }