using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GruntTestLenovo.Startup))]
namespace GruntTestLenovo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
