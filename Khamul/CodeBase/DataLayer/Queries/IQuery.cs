using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.DataLayer.Queries
{
    /// <summary>
	/// This interface is implemented by all Queries. Queries are for getting data, they do not perform the modifications.
	/// </summary>
	public interface IQuery<T>
    {
        /// <summary>
		/// Executes the query.
		/// </summary>
		/// <returns>The data that is generated by the query.</returns>
        T Execute();
    }
}