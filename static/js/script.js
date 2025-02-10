// // Modal functionality
// const modal = document.getElementById('modal');

// function abrirModal() {
// modal.style.display = 'flex';
// }

// function fecharModal() {
// modal.style.display = 'none';
// }

// window.onclick = function(event) {
// if (event.target === modal) fecharModal();
// };

// window.onkeydown = function(event) {
// if (event.key === 'Escape') fecharModal();
// };

// // Formata a data para o padrão brasileiro DD/MM/YYYY
// function formatarDataParaBR(data) {
// if (!data) return "";
// const [ano, mes, dia] = data.split("-");
// return ${dia}/${mes}/${ano};
// }

// function salvarLinha(event) {
// event.preventDefault();

// // Obter a referência da tabela e corpo da tabela (tbody)
// const tabela = document.getElementById('crmTable').getElementsByTagName('tbody')[0];
// const novaLinha = tabela.insertRow();

// // Dados extraídos dos campos do modal
// const dados = [
//     tabela.rows.length + 1,  // ID ATENÇÃO NESSA LINHA!!!!!
//     formatarDataParaBR(document.getElementById('dataOrcamento').value),
//     document.getElementById('agencia').value,
//     document.getElementById('responsavel').value,
//     document.getElementById('telefoneSolicitante').value,
//     document.getElementById('emailSolicitante').value,
//     document.getElementById('hotel').value,
//     document.getElementById('sala').value,
//     document.getElementById('montagem').value,
//     document.getElementById('dataInicio').value,
//     document.getElementById('dataFim').value,
//     document.getElementById('totalDiasUsados').value,
//     document.getElementById('segmento').value,
//     document.getElementById('segmentoMercado').value,
//     document.getElementById('responsavelAtlantica').value,
//     document.getElementById('responsavelHotel').value,
//     document.getElementById('perfilEvento').value,
//     document.getElementById('budgetCliente').value,
//     document.getElementById('concorrentes').value,
//     document.getElementById('fatorDecisivo').value,
//     document.getElementById('qtdPAX').value,
//     document.getElementById('eventoHospedagem').value,
//     document.getElementById('nomeEvento').value,
//     document.getElementById('status').value,
//     document.getElementById('motivoCancelamento').value,
//     document.getElementById('concorrenteEscolhido').value,
//     document.getElementById('valorConcorrente').value,
//     document.getElementById('deadlineConfirmacao').value,
//     document.getElementById('dataConfirmacao').value,
//     document.getElementById('rns').value,
//     document.getElementById('adr').value,
//     document.getElementById('receitaHospedagem').value,
//     document.getElementById('diariasHospedagem').value,
//     document.getElementById('valorHospedagem').value,
//     document.getElementById('receitaSalas').value,
//     document.getElementById('diariasSalas').value,
//     document.getElementById('valorSalas').value,
//     document.getElementById('receitaEquipamentos').value,
//     document.getElementById('receitaAB').value,
//     document.getElementById('receitaTotal').value,
//     document.getElementById('pagamento').value,
//     document.getElementById('obs').value,
//     document.getElementById('mes').value,
//     document.getElementById('ano').value
// ];

// // Inserir as células na nova linha
// dados.forEach(dado => {
//     const novaCelula = novaLinha.insertCell();
//     novaCelula.textContent = dado;
//     novaCelula.contentEditable = true; // Tornar cada célula editável
// });

// // Fechar o modal após salvar os dados
// fecharModal();

// // Limpar os campos do formulário para nova entrada
// document.getElementById('formAdicionar').reset();

// salvarDados();
// fecharModal();
// }

// document.addEventListener("DOMContentLoaded", carregarDados);
// document.getElementById("searchBox").addEventListener("input", filtrarTabela);

// function carregarDados() {
// const tabela = document.getElementById("crmTable").tBodies[0];
// const dadosSalvos = JSON.parse(localStorage.getItem("crmDados") || "[]");

// dadosSalvos.forEach(linhaDados => {
// const novaLinha = tabela.insertRow();
// linhaDados.forEach((dado, i) => {
//     const novaCelula = novaLinha.insertCell(i);
//     novaCelula.textContent = dado;
//     novaCelula.contentEditable = true;
// });


// });

// // Aplica a formatação condicional após carregar os dados
// aplicarFormataçãoCondicional();
// }


// function salvarDados() {
// const tabela = document.getElementById("crmTable").tBodies[0];
// const dados = Array.from(tabela.rows).map(row =>
// Array.from(row.cells).slice(0, -1).map(cell => cell.textContent)
// );

// localStorage.setItem("crmDados", JSON.stringify(dados));

// // Aplica a formatação condicional após salvar os dados
// aplicarFormataçãoCondicional();
// }


// function exportarCSV() {
// const tabela = document.getElementById('crmTable');
// const linhas = tabela.rows;
// let csvContent = "";

// for (let i = 0; i < linhas.length; i++) {
//     const colunas = linhas[i].cells;
//     const linha = [];
//     for (let AS = 0; AS< colunas.length - 1; AS++) { // Ignorar a coluna "Ações"
//         linha.push("${colunas[AS].textContent}");
//     }
//     csvContent += linha.join(",") + "\n";
// }

// const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
// const link = document.createElement("a");
// link.href = URL.createObjectURL(blob);
// link.download = "dados_crm.csv";
// link.style.display = "none";
// document.body.appendChild(link);
// link.click();
// document.body.removeChild(link);
// }

// function importarCSV(event) {
// const file = event.target.files[0];
// if (!file) return;

// const reader = new FileReader();
// reader.onload = function (e) {
//     const conteudo = e.target.result;
//     const linhas = conteudo.split("\n");

//     const tabela = document.getElementById('crmTable').getElementsByTagName('tbody')[0];
//     tabela.innerHTML = "";

//     linhas.forEach((linha, index) => {
//         if (!linha.trim()) return;
//         const colunas = linha.split(",");
//         const novaLinha = tabela.insertRow();

//         colunas.forEach((coluna, i) => {
//             const novaCelula = novaLinha.insertCell(i);
//             novaCelula.textContent = coluna.replace(/"/g, "");
//             novaCelula.contentEditable = true;
//         });

//     });

//     salvarDados();
// };
// reader.readAsText(file);
// }

// function ordenarTabela(colunaIndex) {
// const tabela = document.getElementById("crmTable").tBodies[0];
// const linhas = Array.from(tabela.rows);

// const ordemAtual = tabela.getAttribute("data-ordem") === "asc" ? "desc" : "asc";
// tabela.setAttribute("data-ordem", ordemAtual);

// linhas.sort((a, b) => {
//     const valA = a.cells[colunaIndex].textContent.trim();
//     const valB = b.cells[colunaIndex].textContent.trim();

//     return ordemAtual === "asc" 
//         ? valA.localeCompare(valB) 
//         : valB.localeCompare(valA);
// });

// linhas.forEach(linha => tabela.appendChild(linha));
// salvarDados();
// }


// function excluirLinha(linha) {
// if (linha && confirm("Tem certeza que deseja excluir esta linha?")) {
//     linha.remove(); // Remove a linha específica
//     salvarDados(); // Atualiza o localStorage
//     console.log("Linha excluída com sucesso!");
// }
// }

// function filtrarTabela() {
// const termo = document.getElementById("searchBox").value.toLowerCase();
// const linhas = document.getElementById("crmTable").tBodies[0].rows;

// Array.from(linhas).forEach(linha => {
//     const visivel = Array.from(linha.cells).some(celula =>
//         celula.textContent.toLowerCase().includes(termo)
//     );
//     linha.style.display = visivel ? "" : "none";
// });
// }

// function aplicarFormataçãoCondicional() {
// const hoje = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD
// const linhas = document.getElementById("crmTable").tBodies[0].rows;

// Array.from(linhas).forEach(linha => {
// const dataOrcamento = linha.cells[1]?.textContent.trim(); // Coluna "Data do Orçamento"
// if (dataOrcamento === hoje) {
//     linha.classList.add("highlight-row");
// } else {
//     linha.classList.remove("highlight-row");
// }
// });
// }


// //Configuração do Tooltip

// const tooltip = document.getElementById("tooltip");
// const editarBtn = document.getElementById("editarBtn");
// const excluirBtn = document.getElementById("excluirBtn");

// let linhaSelecionada = null; // Guarda a linha clicada

// // Função para exibir o tooltip
// document.getElementById("tbodytext").addEventListener("click", function (event) {
// const linha = event.target.closest("tr"); // Verifica se clicou numa linha
// if (linha) {
// linhaSelecionada = linha;

// // Posiciona o tooltip próximo ao clique
// tooltip.style.display = "block";
// tooltip.style.left = ${event.pageX + 10}px;
// tooltip.style.top = ${event.pageY + 10}px;
// }
// });

// // Função para editar
// editarBtn.addEventListener("click", function () {
// if (linhaSelecionada) {
// abrirModal(); // Abre o modal
// preencherFormulario(linhaSelecionada); // Preenche o formulário com dados
// tooltip.style.display = "none"; // Esconde o tooltip
// }
// });

// // Função para excluir
// excluirBtn.addEventListener("click", function () {
// if (linhaSelecionada) {
// excluirLinha(linhaSelecionada); // Chama sua função existente
// tooltip.style.display = "none"; // Esconde o tooltip
// }
// });

// // Esconder o tooltip ao clicar fora
// document.addEventListener("click", function (event) {
// if (!tooltip.contains(event.target) && !event.target.closest("tr")) {
// tooltip.style.display = "none";
// }
// });

// // Preenche o modal com os dados da linha
// function preencherFormulario(linha) {
// const cells = linha.cells;

// document.getElementById("dataOrcamento").value = formatarDataParaISO(cells[1].textContent);
// document.getElementById("agencia").value = cells[2].textContent;
// document.getElementById("responsavel").value = cells[3].textContent;
// document.getElementById("telefoneSolicitante").value = cells[4].textContent;
// document.getElementById("emailSolicitante").value = cells[5].textContent;
// // Adicione os demais campos conforme necessário
// }

// // Função auxiliar para converter a data para ISO
// function formatarDataParaISO(data) {
// const [dia, mes, ano] = data.split("/");
// return ${ano}-${mes}-${dia};
// }



// ----- IMPORTAR DADOS CSV -----    
// function importarCSV(event) {
//     const file = event.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = function (e) {
//         const conteudo = e.target.result;
//         const linhas = conteudo.split("\n");

//         const tabela = document.getElementById('crmTable').getElementsByTagName('tbody')[0];
//         tabela.innerHTML = "";

//         linhas.forEach((linha, index) => {
//             if (!linha.trim()) return;
//             const colunas = linha.split(",");
//             const novaLinha = tabela.insertRow();

//             colunas.forEach((coluna, i) => {
//                 const novaCelula = novaLinha.insertCell(i);
//                 novaCelula.textContent = coluna.replace(/"/g, "");
//                 novaCelula.contentEditable = true;
//             });

//         });

//         salvarDados();
//     };
//     reader.readAsText(file);
//     }
    // ----- /IMPORTAR DADOS CSV ----- 
