const invalido = document.querySelector('#msn')
const botao = document.querySelector('#botao') 
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

const box = document.querySelector('.box')

recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    const numero = evento.results[0][0].transcript
    box.innerHTML = numero
    
    if(Number.isNaN(parseInt(numero)) || numero < 1 || numero > 999){
        box.innerHTML = '🙁'
        invalido.innerHTML = 'O valor dito nao é um numero ou nao esta no intervalo entre 1 e 999!'
    } else{
        if (numero == numeroSecreto){
            invalido.style.color = 'green'
            invalido.innerHTML = 'PARABENS!!! Voce acertou o numero secreto.'

            //Criando o botao 'JOGAR NOVAMENTE'------
            const novoitem = document.createElement('button')
            novoitem.innerHTML = 'JOGAR NOVAMENTE'
            botao.appendChild(novoitem)
            botao.addEventListener('click', function(){
                window.location.reload()
            })
            //-----------------------------------------

        }else if(numero < numeroSecreto){
            invalido.innerHTML = `O numero secreto é MAIOR que ${numero}.`
        }else{
            invalido.innerHTML = `O numero secreto é MENOR que ${numero}.`
        }
    
    } 
}

recognition.addEventListener('end', function(){
    recognition.start()
})


    