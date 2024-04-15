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
     * Generic API fetch method for all resources
     * @param resource the API endpoint
     * @param queryParameters all GET parameters that should be appended to the URL
     * @param method HTTP method to call the endpoint with. BSM only supports GET at the moment.
     * @protected
     */
    protected async apiCall<T>(resource: string, queryParameters: string[][], method: string = "GET"): Promise<T | undefined> {
        const url = this.buildRequestURL(queryParameters, resource);
        const init: RequestInit = {
            method: method,
        }
        const request = new Request(url, init)
        const response = await fetch(request)
        return this.parseJSON(response)
    }

    /**
     * Type-decorated way to parse a response object as JSON. Returns the generic input type as object on success,
     * undefined on failure.
     *
     * @param response
     */
    protected async parseJSON<T>(response: Response): Promise<T | undefined> {
        let json: T | undefined

        try {
            json = await response.json()
            return json as T
        } catch {
            json = undefined
            return json
        }
    }

    /**
     * Helper method to build the API call URL from the given parameters and endpoint.
     *
     * @param queryParameters
     * @param resource
     */
    protected buildRequestURL(queryParameters: string[][], resource: string) {
        queryParameters.push(["api_key", this.apiKey])

        const params = new URLSearchParams(queryParameters).toString()
        return new URL(`${this.API_URL}/${resource}?` + params);
    }
}
