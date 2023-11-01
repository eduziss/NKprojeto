function calcularEstatisticas(){
const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
const pendentes = tarefas.filter(t => t.concluida  == false)
const qtdePendente = pendentes.length
document.querySelector("#qtde-pendente").innerHTML = qtdePendente


    const concluida = tarefas.filter (t=> t.concluida == true)
    const qteConcluida = concluida.length
    document.querySelector("#qtde-concluida").innerHTML = qteConcluida


    const meusPontos =  concluida.reduce((total, t) => total += +t.quantidade_arquivos, 0 )
    document.querySelector("#meus-pontos").innerHTML = meusPontos


}




calcularEstatisticas()