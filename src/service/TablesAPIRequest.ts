import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {Table} from "../model/Table.js";

export class TablesAPIRequest extends AbstractAPIRequest {
    /**
     * Get a single table for a given LeagueGroup
     *
     * Scope: Organization, Club
     *
     * @param leagueGroupID the ID for the leagueGroup
     * @throws ParseError
     * @throws FetchError
     */
    public async getSingleTable(leagueGroupID: number): Promise<Table> {
        return await this.apiCallGET<Table>(`leagues/${leagueGroupID}/table.json`, [])
    }
}