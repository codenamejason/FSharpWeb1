namespace FSharpWeb1.Controllers

open System.Net
open System.Net.Http
open System.Web.Http
open FSharpWeb1.Models

/// Retrieves values.
[<RoutePrefix("api")>]
type ShoesController() =
    inherit ApiController()
    // The values themselves. 
    // TODO: grab values from a database or json file
    let values = [| { Brand = "Jimmy Choo"; Style  = "Heel"; Color = "Black"; Price = "5200"; Quality = "8/10"; Popularity = "7/10"; WantItMeter = "75/100"; };
                    { Brand = "Steve Madden"; Style = "Flat"; Color = "Blue"; Price = "3500"; Quality = "9/10"; Popularity = "6/10"; WantItMeter = "80/100"; } 
                 |]

    /// Gets all values.
    [<Route("shoes")>]
    member x.Get() = values

    /// Gets a single value at the specified index.
    [<Route("shoes/{id}")>]
    member x.Get(request: HttpRequestMessage, id: int) =
        if id >= 0 && values.Length > id then
            request.CreateResponse(values.[id])
        else 
            request.CreateResponse(HttpStatusCode.NotFound)


