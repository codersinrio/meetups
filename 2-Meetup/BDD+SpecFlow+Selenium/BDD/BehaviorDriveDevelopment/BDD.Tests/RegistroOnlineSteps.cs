using System;
using TechTalk.SpecFlow;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Diagnostics;

namespace BDD.Tests
{
    [Binding]
    public class RegistroOnlineSteps
    {
        IWebDriver Browser;
        IWebDriver Browser2;

        [BeforeScenario]
        public void CreateWebDriver()
        {
            //Cria a instancia do browser antes de executar os cenarios
            this.Browser = new OpenQA.Selenium.IE.InternetExplorerDriver();
            this.Browser2 = new OpenQA.Selenium.Chrome.ChromeDriver();
        }

        [AfterScenario]
        public void CloseWebDriver()
        {
            //Fecha o browser depois que termina os cenarios
            this.Browser.Close();
            this.Browser.Dispose();

            this.Browser2.Close();
            this.Browser2.Dispose();
        }

        [Given(@"naveguei para a página de cadastro")]
        public void DadoNavegueiParaAPaginaDeCadastro()
        {
            //Navega para a URL da pagina de Cadastro
            this.Browser.Navigate().GoToUrl("http://localhost:23324/Account/Create");

            this.Browser2.Navigate().GoToUrl("http://localhost:23324/Account/Create");
        }

        [Given(@"não inseri a informação de email")]
        public void DadoNaoInseriAsInformacoesDeEmail()
        {
            //Pegando os elementos e gerando valores de testes
            var txtNome = this.Browser.FindElement(By.Id("Nome"));
            var txtPassword = this.Browser.FindElement(By.Id("Password"));

            //Envia os dados para o formulário
            txtNome.SendKeys("Rafael Cruz");
            txtPassword.SendKeys("123Mudar");

            //Pegando os elementos e gerando valores de testes
            var txtNome2 = this.Browser2.FindElement(By.Id("Nome"));
            var txtPassword2 = this.Browser2.FindElement(By.Id("Password"));

            //Envia os dados para o formulário
            txtNome2.SendKeys("Rafael Cruz");
            txtPassword2.SendKeys("123Mudar");
        }

        [Then(@"pagina de cadastro deve exibir uma mensagem de erro")]
        public void EntaoPaginaDeCadastroDeveExibirUmaMensagemDeErro()
        {
            Assert.IsTrue(this.Browser.FindElement(By.XPath("//span[@data-valmsg-for='Email']")).Text == "Email é obrigatório");
            Assert.IsTrue(this.Browser2.FindElement(By.XPath("//span[@data-valmsg-for='Email']")).Text == "Email é obrigatório");
        }



        [Given(@"que sou um novo usuário")]
        public void DadoQueSouUmNovoUsuario()
        {
            
        }


        [Given(@"inseri todas as informações do formulário corretas")]
        public void DadoInseriTodasAsInformacoesDoFormularioCorretas()
        {
            //Pegando os elementos e gerando valores de testes
            var txtNome = this.Browser.FindElement(By.Id("Nome"));
            var txtEmail = this.Browser.FindElement(By.Id("Email"));
            var txtPassword = this.Browser.FindElement(By.Id("Password"));

            //Envia os dados para o formulário
            txtNome.SendKeys("Rafael Cruz");
            txtEmail.SendKeys("teste@teste.com.br");
            txtPassword.SendKeys("123Mudar");

            //Pegando os elementos e gerando valores de testes
            var txtNome2 = this.Browser2.FindElement(By.Id("Nome"));
            var txtEmail2 = this.Browser2.FindElement(By.Id("Email"));
            var txtPassword2 = this.Browser2.FindElement(By.Id("Password"));

            //Envia os dados para o formulário
            txtNome2.SendKeys("Rafael Cruz");
            txtEmail2.SendKeys("teste@teste.com.br");
            txtPassword2.SendKeys("123Mudar");
        }


        [When(@"clicar no botão de criar conta")]
        public void QuandoClicarNoBotaoDeCriarConta()
        {
            var btnCriarConta = this.Browser.FindElement(By.Id("btnSubmit"));
            //Faz o submit no formulario
            btnCriarConta.Submit();

            var btnCriarConta2 = this.Browser2.FindElement(By.Id("btnSubmit"));
            //Faz o submit no formulario
            btnCriarConta2.Submit();


        }


        [Then(@"o usuário deve ser redirecionado para a Home Page")]
        public void EntaoOUsuarioDeveSerRedirecionadoParaAHomePage()
        {
            Assert.IsTrue(this.Browser.Title == "Home Page - My ASP.NET MVC Application");

            Assert.IsTrue(this.Browser2.Title == "Home Page - My ASP.NET MVC Application");
        }
     
    }
}
