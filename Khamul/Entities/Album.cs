using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.Entities
{
    public class Album
    {
        #region properties
        public int ID { get; set; }
        public List<Picture> Pictures { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTimeOffset DateFrom { get; set; }
        public DateTimeOffset DateTo { get; set; }
        public List<Player> Players { get; set; }
        public PublishingHouse PublishingHouse { get; set; }
        public List<AlbumType> AlbumTypes { get; set; }
        public Picture AlbumMiniaturePicture { get; set; }
        #endregion properties
        #region Database columns' names
        public static string IDDatabaseColumnName = "ID";
        public static string TitleDatabaseColumnName = "Title";
        public static string PicturesDatabaseColumnName = "Pictures";
        public static string DescriptionDatabaseColumnName = "Description";
        public static string DateFromDatabaseColumnName = "DateFrom";
        public static string DateToDatabaseColumnName = "DateTo";
        public static string PlayersDatabaseColumnName = "Players";
        public static string PublishingHouseDatabaseColumnName = "PublishingHouse";
        public static string AlbumTypesDatabaseColumnName = "AlbumTypes";
        public static string AlbumMiniaturePictureDatabaseColumnName = "AlbumMiniaturePicture";
        #endregion
        #region ctros
        public Album()
        {
            Pictures = new List<Picture>();
            Players = new List<Player>();
            AlbumTypes = new List<AlbumType>();
        }
        #endregion ctros
    }
}
