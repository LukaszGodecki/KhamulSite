using Khamul.CodeBase.ServiceLayer.Service;
using Khamul.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace Khamul.Controllers
{
    [RoutePrefix("albums")]
    public partial class AlbumsController : ApiController
    {
        [Route("players/get"), HttpGet]
        public List<Player> GetAllPlayers()
        {
            return MainService.GetAllPlayers();
        }
    }
}
