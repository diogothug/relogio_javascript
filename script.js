function formatarHorario(horario) {
    if (horario < 10){
        return '0' + horario;
    }
    else {
        return horario;
    };
};


function atualizar() {
    var agora = new Date();
    tag_hora = agora.getHours();

    var horario = '' + formatarHorario(agora.getHours()) + ':' + formatarHorario(agora.getMinutes())+
    ':' + formatarHorario(agora.getSeconds());
    display = document.getElementById('id_display');
    display.textContent = horario;
};

setInterval(atualizar, 100);