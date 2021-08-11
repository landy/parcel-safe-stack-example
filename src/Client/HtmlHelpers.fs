module Client.HtmlHelpers

open Fable.Core.JsInterop

let inline importImage path : string =
    importDefault path