using Khamul.CodeBase.ServiceLayer.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.ServiceLayer.Service
{
    public static partial class MainService
    {
        #region HandlesCommands
        /// <summary>
        /// Handles the commands.
        /// </summary>
        /// <param name="command">The command.</param>
        /// <returns>Executes whatever the command executes.</returns>
        public static void handleCommand(ICommand command)
        {
            try
            {
                command.Execute();
            }
            catch (Exception exc)
            {
                //log.Error(exc, $"Command { command.GetType().ToString() } with exception { exc.GetBaseException().ToString()}. See below for more details.");
                throw;
            }
        }
        #endregion HandlesCommands
    }
}
