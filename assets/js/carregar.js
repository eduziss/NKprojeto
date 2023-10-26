window.addEventListener("load", atualizar)
    

function atualizar(){
  document.querySelector("#lista-tarefas").innerHTML = ""
  let tarefas = JSON.parse (localStorage.getItem("tarefas")) || []
  tarefas.forEach( tarefa=> criarCard(tarefa))

}


function criarCard (tarefa){
  //Criando o elemento card
    const card = document.createElement("div")
    card.classList.add("col","s12","m6","l4")
//Todo seu codigo html

    card.innerHTML = `
    <div class="card ${tarefa.concluida == true ? 'grey':'' }">
    <div class="card-content">
      <span class="card-title">${tarefa.titulo}</span>
      <p> Descrição:  ${tarefa.descricao} <br>
      Tipo do arquivo:  ${tarefa.valorS} <br>
      Quantidade de arquivos:  ${tarefa.quantidade_arquivos}</p>
    </div>
    <div class="card-action">
      <a href="#" class="btn red darken-4" onClick = "apagar(${tarefa.id})">
        <i class="material-icons">delete</i>
      </a>
      <a href="#" class="btn green" onClick = "concluir(${tarefa.id})">
        <i class="material-icons">check</i>
      </a>
    </div>
  </div>  
 `

 //Esse "lista-tarefas" é o pai onde todo codigo html vai ser inserido 
 /* <div id = "div-pai">
 
        Aqui vai todo o conteudo que é o filho

      </div>
   */

 document.querySelector("#lista-tarefas").appendChild(card)//card é o filho do lista de tarefas

}