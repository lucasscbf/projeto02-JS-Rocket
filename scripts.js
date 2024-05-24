const alunos  = [
 { name: "Lucas",
  nota1: 10,
  nota2: 10
},
{ name: "Helena",
nota1: 10,
nota2: 9
},
{ name: "Jessyca",
nota1: 5,
nota2: 5
}
]
function media (nota11 , nota22) {
  let media  = (nota11 + nota22)/2;
  return media;
}

for (aluno of alunos) {
mediaAluno = media(aluno.nota1, aluno.nota2)
if (mediaAluno >= 7 )  {
  alert(`A média do Aluno: ${aluno.name}
 é de: ${mediaAluno}
 Parabens ${aluno.name} você foi aprovado no Concurso!
 `)
} else {
    alert(`não foi dessa vez: ${aluno.name} 
    Tente novamente!`)
  }

}
