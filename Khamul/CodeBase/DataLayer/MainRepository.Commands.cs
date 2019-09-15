using Khamul.CodeBase.ServiceLayer.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Khamul.CodeBase.DataLayer.Queries
{
    public partial class MainRepository
    {
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
    }
}
