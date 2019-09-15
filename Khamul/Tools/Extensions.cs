using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.Tools
{
    public static class Extensions
    {
        /// <summary>
        /// Checks if given DataRecord contains column.
        /// </summary>
        /// <param name="dataRecord"><see cref="IDataRecord"/></param>
        /// <param name="searchedColumnName">Name of the column you are looking for.</param>
        /// <returns>True if DataRecord contains column with given name.</returns>
        public static bool HasColumn(this IDataRecord dataRecord, string searchedColumnName)
        {
            bool HasSearchedColumn = false;
            for (int iterator = 0, DataReaderFieldsCount = dataRecord.FieldCount; iterator < DataReaderFieldsCount; iterator++)
            {
                string currentIterationColumnName = dataRecord.GetName(iterator);
                if (currentIterationColumnName.Equals(searchedColumnName, StringComparison.InvariantCultureIgnoreCase))
                {
                    HasSearchedColumn = true;
                    break;
                }
            }
            return HasSearchedColumn;
        }
    }
}
