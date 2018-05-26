using System.Web;
using System.Web.Optimization;

namespace CatalystProblem
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Script/AngularBundles")
                .Include(
                        "~/Bundles/runtime.*",
                        "~/Bundles/polyfills.*",
                        "~/Bundles/scripts.*",
                        "~/Bundles/vendor.*",
                        "~/Bundles/main.*"
                    ));

            bundles.Add(new StyleBundle("~/Content/Styles")
                .Include(
                    "~/Bundles/styles.*", 
                    "~/Content/bootstrap.min.css",
                    "~/Content/Site.css"));
        }
    }
}
