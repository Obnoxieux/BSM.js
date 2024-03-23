import {BSMDataObject} from "../model/BSMDataObject.js";

export abstract class AbstractAPIRequest {
    protected readonly API_URL: string = "https://bsm.baseball-softball.de"

    // reads URL and returns the full response as JSON
    protected async fetchJSONData(url: string, options: RequestInit | undefined): Promise<BSMDataObject> {
        const response = await fetch(url, options)
        return await response.json()
    }

    static readonly SEASON_FILTER = "filters[seasons][]"
    static readonly GAMEDAY_FILTER = "filters[gamedays][]"
    static readonly LEAGUE_FILTER = "filters[leagues][]"
    static readonly ORGANIZATION_FILTER = "filters[organizations][]"
    static readonly TEAM_SEARCH = "search"

    /**
     * Generic API fetch method for all BSM resources
     * @param resource
     * @param queryParameters
     * @param method
     * @protected
     */
    protected async apiCall<T>(resource: string, queryParameters?: Record<string, string>, method: string = "GET"): Promise<T | undefined> {
        const paramObj = queryParameters ?? {}
        paramObj.api_key = "" // TODO

        const params = new URLSearchParams(paramObj).toString()
        const url = new URL(`${this.API_URL}/${resource}` + params)
        const init: RequestInit = {
            method: method,
        }
        const request = new Request(url, init)
        const response = await fetch(request)
        return response.json()
    }
}
