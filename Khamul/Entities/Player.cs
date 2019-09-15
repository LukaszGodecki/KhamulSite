using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.Entities
{
    public class Player
    {
        #region properties
        public int ID { get; set; }
        public string Name { get; set; }        
        #endregion properties
        #region Database columns' names
        public static string IDDatabaseColumnName = "ID";
        public static string NameDatabaseColumnName = "Name";
        #endregion
        #region ctros
        public Player()
        {
        }
        #endregion ctros
    }
}
