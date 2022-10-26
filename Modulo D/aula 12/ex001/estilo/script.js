function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hr = new Date()
    var now = hr.getHours()
    msg.innerHTML = (`Agora são ${now} horas.`)
    if (now >= 0 && now < 12) {
        img.src = 'https://images.pexels.com/photos/1322031/pexels-photo-1322031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = "#BCCABB"
    } else if (now >= 12 && now < 18) {
        // BOA TARDE!
        img.src = 'https://images.pexels.com/photos/1567620/pexels-photo-1567620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = "#B18566"
    } else {
        // BOA NOITE!
        img.src = 'https://images.pexels.com/photos/4069292/pexels-photo-4069292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        document.body.style.background = "#402C1A"
    }
}