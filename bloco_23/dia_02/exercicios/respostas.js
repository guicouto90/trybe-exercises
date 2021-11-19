use('class');

show dbs;

Respostas exercicios:

//2) superherois menores que 180cm = 
db.superheroes.find({"aspects.height": {$lt: 180} } ).pretty();

//3) Total Super Herois menores que 180cm = > 
db.superheroes.count({"aspects.height": {$lt: 180} } );

//4) Retorne o total de super-heróis com até 1.80m. => 
db.superheroes.count({"aspects.height": {$lte: 180} } );

//5) Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.find({"aspects.height": {$gte: 200} } ).pretty();

//6) Retorne o total de super-heróis com 2.00m ou mais => 
db.superheroes.count({"aspects.height": {$gte: 200}});

//7) Selecione todos os super-heróis que têm olhos verdes. => 
db.superheroes.find({"aspects.eyeColor": {$eq: 'green'} } ).pretty();

//8) Retorne o total de super-heróis com olhos azuis. => 
db.superheroes.count({"aspects.eyeColor": {$eq: "blue"}});

//9)Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.find({"aspects.hairColor": {$in: ["Black", "No Hair"]} }).pretty();

//10) Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).
db.superheroes.count({"aspects.hairColor": {$in: ["Black", "No Hair"]}});

//11) Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.find({"aspects.hairColor": {$nin: ["Black", "No Hair"] }}).pretty();

//12) Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.count({"aspects.height": {$not: {$gt: 180}}});

//13) Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m .
db.superheroes.find({$and: [
  {"race": {$ne: "Human"}},
  {"aspects.height": {$not: {$gt: 180}}}
]}).pretty();

//14) Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
db.superheroes.find(
    {
and:[
            {
or: [{ "aspects.height": 180 }, { "aspects.height": 200 }]
            },
            {
              publisher: "Marvel Comics"
            }
        ]
    }
).pretty();

Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .
Exercício 16: Retorne o total de documentos que não contêm o campo race .
Exercício 17: Retorne o total de documentos que contêm o campo hairColor .
Exercício 18: Remova apenas um documento publicado pela Sony Pictures .
Exercício 19: Remova todos os documentos publicados pelo George Lucas .