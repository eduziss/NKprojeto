document.querySelector("#botao-cadastrar").addEventListener("click", () =>{

    let tarefas = JSON.parse (localStorage.getItem("tarefas")) || []
 


    const tarefa = {
        titulo: document.querySelector("#titulo").value,
        descricao: document.querySelector("#descricaoform").value,
      /*  pontos:  document.querySelector("#pontos").value*/
    }


    tarefas.push(tarefa)
    
    /*Salvando em um local storage e convertando o objto para string usando JSON  */
    localStorage.setItem("tarefas",JSON.stringify(tarefas))


   window.location.href = "meusArquivos.html"
    
} )