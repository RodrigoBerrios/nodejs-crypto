require('dotenv-defaults').config({
    defaults: './.env.example'
})
const { encrypt } = require('./encrypt')
const { decrypt } = require('./decrypt')

const encrypted = encrypt("Hello, world")
console.log("encryped data:", encrypted)

const decryped = decrypt(encrypted)
console.log("decryped data:", decryped)