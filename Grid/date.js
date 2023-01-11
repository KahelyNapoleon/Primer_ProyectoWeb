const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto"," Semptiembre", "October", "Noviembre", "Diciembre"]

const interval = setInterval(() => {
    const local = new Date();
    
    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear()

        time.innerHTML = local.toLocaleTimeString();
        date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 100);