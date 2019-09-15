using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.DataLayer.Queries
{
    public partial class MainRepository
    {
        /// <summary>
		/// Executes the actual query.
		/// </summary>
		/// <typeparam name="T">Type of the value returned from query.</typeparam>
		/// <param name="query">Query object to execute.</param>
		/// <returns>Whatever the specified query returns.</returns>
        public static T handleQuery<T>(IQuery<T> query)
        {
            try
            {
                return query.Execute();
            }
            catch (Exception exc)
            {
                //log.Error(exc, $"Query { query.GetType().ToString() } with exception { exc.GetBaseException().ToString()}. See below for more details.");
                throw;
            }
        }
    }
}
