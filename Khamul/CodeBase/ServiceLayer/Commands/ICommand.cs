using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.ServiceLayer.Commands
{
    /// <summary>
    /// Interface for Controler Commands
    /// </summary>
    public interface ICommand
    {
        /// <summary>
        /// Executes the actual command.
        /// </summary>
        void Execute();
    }
}
