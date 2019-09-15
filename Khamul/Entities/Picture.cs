using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.Entities
{
    public class Picture
    {
        #region properties
        public int ID { get; set; }
        public string linkToPicture { get; set; }
        public string LinkToMiniature { get; set; }
        public int AlbumID { get; set; }
        #endregion properties
        #region Database columns' names
        public static string IDDatabaseColumnName = "ID";
        public static string LinkToPictureDatabaseColumnName = "LinkToPicture";
        public static string LinkToMiniatureDatabaseColumnName = "LinkToMiniature";
        public static string AlbumIDDatabaseColumnName = "AlbumID";
        #endregion
        #region ctros
        public Picture()
        {
        }
        #endregion ctros
    }
}
