document.querySelector("#botao-cadastrar").addEventListener("click", () =>{

    let tarefas = JSON.parse (localStorage.getItem("tarefas")) || []


 


    let elementosDeRadio = document.getElementsByName('group1');
    let valorSelecionado = '';

    for (var i = 0; i < elementosDeRadio.length; i++) {
      if (elementosDeRadio[i].checked) {
          valorSelecionado = elementosDeRadio[i].value;
          break;
      }
  }

  const tarefa = {
    id: Date.now(),
    titulo: document.querySelector("#titulo").value,
    descricao: document.querySelector("#descricaoform").value,
    quantidade_arquivos: document.querySelector("#qtd_arquivos").value,
    valorS: valorSelecionado,
    concluida: false
    
}

 


    

    tarefas.push(tarefa)
    
    /*Salvando em um local storage e convertando o objto para string usando JSON  */
    localStorage.setItem("tarefas",JSON.stringify(tarefas))


   window.location.href = "meusArquivos.html"

   calcularEstatisticas()
    
} )