
var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora}hrs`)
if (hora < 12) {
    console.log('Tenha um bom dia!')
} else if (hora <= 18) {
    console.log('Tenha uma boa tarde!')
} else {`Tenha uma boa noite!`}