# Gerenciador-de-Tarefas

## App for manage tasks

### Aplicativo que permite criar e gerenciar tarefas simples para o usuario

![Screenshot_20240908_192809](https://github.com/user-attachments/assets/e6a0d28d-80c0-4eca-9d8b-5e8542fe9f78)

![Screenshot_20240908_192857](https://github.com/user-attachments/assets/c7fdc9f1-5d08-41f7-aeac-1d6f8eb2d288)


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

 - No cmd voce vai ir no diretorio "front" e colocar o seguinte comando "npm run dev" depois abra o localhost no seu navegador
   
 - Agora em outro cmd você vai ir do diretorio "api" e colocar o seguinte comando "npm run dev"
   
--DEIXE SEMPRE OS DOIS CMDS RODANDO OS SERVIDORES PARA FUNCIONAR
--REGISTRE UM NOVO USUARIO PARA CONSEGUIR LOGAR

 
 
 
   



