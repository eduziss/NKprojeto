function concluir (id){
    console.log("a")
    //Buscar o localstrorge
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    //buscar tarefa com id
    let tarefa = tarefas.find(t => t.id === id)
    //alterar estado
    tarefa.concluida = true
    //salvar no localstorage
    localStorage.setItem("tarefas" , JSON.stringify(tarefas))
    atualizar()
    calcularEstatisticas()
}