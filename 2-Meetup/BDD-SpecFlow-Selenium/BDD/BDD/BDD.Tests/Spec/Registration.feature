#language: pt-br

Funcionalidade: Registro Online
	Registrar um novo usuário do site
	Assim eles poderão se autenticar e usar as funcionalidades do site

Cenario: Em um cadastro realizado com sucesso o usuário deverá ser redirecionado para a Home Page
	Dado que sou um novo usuário
	E naveguei para a página de cadastro
	E inseri todas as informações do formulário corretas
	Quando clicar no botão de criar conta
	Entao o usuário deve ser redirecionado para a Home Page

Cenario: Pagina de cadastro deve exibir uma mensagem de erro caso o email esteja em banco
	Dado que sou um novo usuário
	E naveguei para a página de cadastro
	E não inseri a informação de email
	Quando clicar no botão de criar conta
	Entao pagina de cadastro deve exibir uma mensagem de erro