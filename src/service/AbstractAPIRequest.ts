import {BSMDataObject} from "../model/BSMDataObject.js";

export abstract class AbstractAPIRequest {
    protected readonly API_URL: string = "https://bsm.baseball-softball.de"

    constructor(protected apiKey: string) {}

    // reads URL and returns the full response as JSON
    protected async fetchJSONData(url: string, options: RequestInit | undefined): Promise<BSMDataObject> {
        const response = await fetch(url, options)
        return await response.json()
    }

    readonly SEASON_FILTER = "filters[seasons][]"
    readonly GAMEDAY_FILTER = "filters[gamedays][]"
    readonly LEAGUE_FILTER = "filters[leagues][]"
    readonly ORGANIZATION_FILTER = "filters[organizations][]"
    readonly TEAM_SEARCH = "search"

    /**
     * Generic API fetch method for all BSM resources
     * @param resource
     * @param queryParameters
     * @param method
     * @protected
     */
    protected async apiCall<T>(resource: string, queryParameters: string[][], method: string = "GET"): Promise<T | undefined> {
        const url = this.buildRequestURL(queryParameters, resource);
        const init: RequestInit = {
            method: method,
        }
        const request = new Request(url, init)
        const response = await fetch(request)
        return response.json()
    }

    private buildRequestURL(queryParameters: string[][], resource: string) {
        queryParameters.push(["api_key", this.apiKey])

        const params = new URLSearchParams(queryParameters).toString()
        return new URL(`${this.API_URL}/${resource}?` + params);
    }
}
