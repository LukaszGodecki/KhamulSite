using Khamul.CodeBase.DataLayer.Queries;
using Khamul.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.ServiceLayer.Service
{
    public static partial class MainService
    {
        #region HandleQuery
        public static T handleQuery<T>(IQuery<T> query)
        {
            try
            {
                return query.Execute();
            }
            catch (Exception exc)
            {
                //log.Error(exc, $"Query { query.GetType().ToString() } with exception { exc.GetBaseException().ToString()}. See below for more details.");
                return default(T);
            }
        }
        #endregion HandleQuery
        public static List<Player> GetAllPlayers()
        {
            var query = new GetAllPlayersQuery();
            return handleQuery(query);
        }
    }
}
