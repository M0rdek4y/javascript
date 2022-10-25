var now = new Date()
var sem = now.getDay()
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/
switch (sem) {
    case 0:
        console.log('Domingo, Tenha um bom dia!')
        break
    case 1:
        console.log('Segunda, Tenha um bom dia!')
        break
    case 2:
        console.log('Terça, Tenha um bom dia!')
        break
    case 3:
        console.log('Quarta, Tenha um bom dia!')
        break
    case 4:
        console.log('Quinta, Tenha um bom dia!')
        break
    case 5:
        console.log('Sexta, Tenha um bom dia!')
        break
    case 6:
        console.log('Sábado, Tenha um bom dia!')
        break
    default :
        console.log('Dia inválido!, Tenha um bom dia!')
        break
}
