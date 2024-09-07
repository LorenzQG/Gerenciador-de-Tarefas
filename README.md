# Gerenciador-de-Tarefas

## App for manage tasks

### Aplicativo que permite criar e gerenciar tarefas simples para o usuario

Tecnologias e linguagens utilizadas:

- Typescript
  - Express
  - PrismaORM
  
- JavaScript
  - nodeJS
  - ReactJS
  
- MySQl/MariaDB

Instruções de utilização:

 No cmd digite os seguintes comandos:

 - npm i -Para instalar os pacotes e dependencias utilizadas

 No diretorio "api" crie o seguinte arquivo ".env":

 - Nele você vai colocar a seguinte linha " JWT_SECRET= 'chavedesuapreferencia' "

 Ainda no diretorio "api" voce vai entrar em prisma/schema.prisma onde estarão os modelos criados para o banco de dados:
 
 - onde diz url em "datasource db" voce vai trocar os valores da url para conectar com seu banco de dados "BdUtilizado://usuario:senha@localhost:PortaDoBancodedados/NomeDaSuaDatabase"
   
 - Agora no cmd voce vai colocar npx prisma db push

 Para rodar os servidores agora siga os seguintes passos:

 - No cmd voce vai ir no diretorio "front" e colocar o seguinte comando "npm run dev"
   
 - Agora em outro cmd você vai ir do diretorio "api" e colocar o seguinte comando "npm run dev"
   
--DEIXE SEMPRE OS DOIS CMDS RODANDO OS SERVIDORES PARA FUNCIONAR

 
 
 
   



