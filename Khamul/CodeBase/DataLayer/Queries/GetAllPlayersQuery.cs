using Khamul.CodeBase.ServiceLayer.Service;
using Khamul.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.DataLayer.Queries
{
    public class GetAllPlayersQuery : IQuery<List<Player>>
    {
        public List<Player> Execute()
        {
            string sqlQuery = "[dbo].[USP_SelectAllPlayers]";
            List<Player> newsList = new List<Player>();
            using (SqlConnection sqlConn = new SqlConnection("MainRepository.ConnectDatabaseConnectionString"))
            {
                if (sqlConn.State != ConnectionState.Open) sqlConn.Open();
                SqlCommand sqlComm = new SqlCommand(sqlQuery, sqlConn);
                sqlComm.CommandType = CommandType.StoredProcedure;
                using (SqlDataReader r = sqlComm.ExecuteReader())
                {
                    while (r.Read())
                    {
                        newsList.Add(MainService.GetSinglePlayer(r));
                    }
                }
            }
            return newsList;
        }
    }
}
