relogio=()=>{  
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    horaEmSegundos=(segundos)=>{
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    };
    iniciaRelogio=()=>{
        timer = setInterval(()=>{
            segundos++;
            relogio.innerHTML = horaEmSegundos(segundos);
        }, 1000);
    };
    document.addEventListener('click', (event)=>{
        const elemento = event.target;
        if (elemento.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            relogio.classList.add('text-light');
            clearInterval(timer);
            iniciaRelogio();
        }else if(elemento.classList.contains('pausar')){
            relogio.classList.remove('text-light');
            relogio.classList.remove('iniciar');
            relogio.classList.add('pausado');
            clearInterval(timer);
        }else if(elemento.classList.contains('zerar')){
            relogio.classList.remove('pausado');
            relogio.classList.add('text-light');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
};
relogio();


