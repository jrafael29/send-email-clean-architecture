Colocando a mão na massa e tentando aplicar os conceitos do livro 'Arquitetura Limpa' do Robert C. Martin (Uncle Bob).

Foi criado um sistema que, dado um csv com a seguinte estrutura: 
'nome,email,telefone'

Converte o csv em JSON e envia um email para cada integrante da lista.

Para envio do email há duas classes de serviços: 
Uma utilizando o nodemailer
Uma ficticia, utilizando o amazon SES. 

Para aplicar o L do SOLID - Liskov Substitution Principle, criei uma implementação de envio de email falsa, apenas para demonstração

Para rodar o projeto execute os seguintes comandos: 

``npm i`` 

``npm start``