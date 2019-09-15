using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.Entities
{
    public class PublishingHouse
    {
        #region properties
        public int ID { get; set; }
        public string Name { get; set; }
        public string LinkToLogo { get; set; }
        #endregion properties
        #region Database columns' names
        public static string IDDatabaseColumnName = "ID";
        public static string NameDatabaseColumnName = "Name";
        public static string LinkToLogoDatabaseColumnName = "LinkToLogo";
        #endregion
        #region ctros
        public PublishingHouse()
        {
        }
        #endregion ctros
    }
}
