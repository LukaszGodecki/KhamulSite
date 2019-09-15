using Khamul.Entities;
using Khamul.Tools;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.ServiceLayer.Service
{
    public static partial class MainService
    {
        public static Player GetSinglePlayer(SqlDataReader dataFromDatabase)
        {
            Player player = new Player
            {
                ID = dataFromDatabase.HasColumn(Player.IDDatabaseColumnName) ? Convert.ToInt32(dataFromDatabase[Player.IDDatabaseColumnName]) : 0,
                Name = dataFromDatabase.HasColumn(Player.NameDatabaseColumnName) ? dataFromDatabase[Player.NameDatabaseColumnName].ToString() : "Default"
            };
            return player;
        }
        public static AlbumType GetSingleAlbumType(SqlDataReader dataFromDatabase)
        {
            AlbumType albumType = new AlbumType
            {
                ID = dataFromDatabase.HasColumn(AlbumType.IDDatabaseColumnName) ? Convert.ToInt32(dataFromDatabase[AlbumType.IDDatabaseColumnName]) : 0,
                Name = dataFromDatabase.HasColumn(AlbumType.NameDatabaseColumnName) ? dataFromDatabase[AlbumType.NameDatabaseColumnName].ToString() : "Default"
            };
            return albumType;
        }
        public static PublishingHouse GetSinglePublishingHouse(SqlDataReader dataFromDatabase)
        {
            PublishingHouse publishingHouse = new PublishingHouse
            {
                ID = dataFromDatabase.HasColumn(PublishingHouse.IDDatabaseColumnName) ? Convert.ToInt32(dataFromDatabase[PublishingHouse.IDDatabaseColumnName]) : 0,
                Name = dataFromDatabase.HasColumn(PublishingHouse.NameDatabaseColumnName) ? dataFromDatabase[PublishingHouse.NameDatabaseColumnName].ToString() : "Default",
                LinkToLogo = dataFromDatabase.HasColumn(PublishingHouse.LinkToLogoDatabaseColumnName) ? dataFromDatabase[PublishingHouse.LinkToLogoDatabaseColumnName].ToString() : "Default"
            };
            return publishingHouse;
        }
    }
}
