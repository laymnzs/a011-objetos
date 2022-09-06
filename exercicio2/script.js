const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️
let ator = filme.elenco;

//a)
console.log(ator[0]);

//b)
console.log(ator[3]); 

//c)
console.log(filme.transmissoesHoje); 

//d)
console.log(filme.transmissoesHoje[1].horario); 