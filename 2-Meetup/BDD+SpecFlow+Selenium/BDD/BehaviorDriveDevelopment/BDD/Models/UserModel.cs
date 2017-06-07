using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BDD.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        [Required(ErrorMessage="Nome é obrigatório")]
        public String Nome { get; set; }

        [Required(ErrorMessage="Email é obrigatório")]
        [EmailAddress(ErrorMessage="Email é obrigatório")]
        public String Email { get; set; }

        [Required(ErrorMessage= "Password é obrigatório")]
        public String Password { get; set; }
    }
}