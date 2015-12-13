namespace FSharpWeb1.Controllers

open System.Net
open System.Net.Http
open System.Web.Http
open FSharpWeb1.Models

/// Retrieves values.
[<RoutePrefix("api")>]
type CarsController() =
    inherit ApiController()
    // The values themselves. 
    // TODO: grab values from a database or json file
    let values = [| { Make = "Ford"; Model = "Escape"; Miles = "143000"; Year = "2002"; Price = "5000"  };
                    { Make = "Buick"; Model = "Verano"; Miles = "30000"; Year = "2012"; Price = "22000" } 
                 |]

    /// Gets all values.
    [<Route("cars")>]
    member x.Get() = values

    /// Gets a single value at the specified index.
    [<Route("cars/{id}")>]
    member x.Get(request: HttpRequestMessage, id: int) =
        if id >= 0 && values.Length > id then
            request.CreateResponse(values.[id])
        else 
            request.CreateResponse(HttpStatusCode.NotFound)

