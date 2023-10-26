const botoes =  document.querySelectorAll(".btn-apagar")


function apagar(id){

console.log("apagar ", id )

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []


//Removendo
const tarefas_filtradas = tarefas.filter(tarefa => tarefa.id !== id)

//Salvando a localstorage
localStorage.setItem("tarefas" , JSON.stringify(tarefas_filtradas))
atualizar()
calcularEstatisticas()

}