import {ParseError} from "../error/ParseError.js";
import {FetchError} from "../error/FetchError.js";

export abstract class AbstractAPIRequest {
    protected readonly API_URL: string = "https://bsm.baseball-softball.de"

    constructor(protected readonly apiKey: string) {}

    public readonly SEASON_FILTER = "filters[seasons][]"
    public readonly GAMEDAY_FILTER = "filters[gamedays][]"
    public readonly LEAGUE_FILTER = "filters[leagues][]"
    public readonly ORGANIZATION_FILTER = "filters[organizations][]"
    public readonly TEAM_SEARCH = "search"

    protected readonly defaultSeason = new Date().getFullYear()

    /**
     * Generic API fetch method for all resources that combines the three parts of a BSM API call:
     * - URL building from query parameters
     * - data fetching
     * - response parsing
     *
     * BSM supports only GET at the moment; other HTTP methods might be possible
     * later, but should get their own method.
     *
     * @param resource the API endpoint
     * @param queryParameters all GET parameters that should be appended to the URL
     * @throws ParseError
     * @throws FetchError
     * @protected
     */
    protected async apiCallGET<T>(resource: string, queryParameters: string[][]): Promise<T> {
        const url = this.buildRequestURL(resource, queryParameters);

        const response = await fetch(url)

        if (!response.ok) {
            throw new FetchError(`An error has occurred: ${response.status}`);
        }

        try {
            return this.parseJSON<T>(response)
        } catch(error: any) {
            throw new ParseError(`The Response could not be parsed to valid object of the requested type: ${error.message}`)
        }
    }

    /**
     * Type-decorated wrapper method to parse a response object as JSON. Returns the generic input type as object on success,
     * and throws a custom error on failure.
     *
     * @param response
     * @throws ParseError
     */
    protected async parseJSON<T>(response: Response): Promise<T> {
        try {
            const json = await response.json()
            return json as T
        } catch {
            throw new ParseError("The Response could not be parsed to valid object of the requested type.")
        }
    }

    /**
     * Helper method to build the API call URL from the given parameters and endpoint.
     *
     * @param queryParameters
     * @param resource
     */
    protected buildRequestURL(resource: string, queryParameters: string[][]): URL {
        queryParameters.push(["api_key", this.apiKey])

        const params = new URLSearchParams(queryParameters).toString()
        return new URL(`${this.API_URL}/${resource}?` + params);
    }
}
