using BDD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BDD.Controllers
{
    public class AccountController : Controller
    {
        //
        // GET: /Account/

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(UserModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            return Redirect("~/Home");
        }

    }
}
