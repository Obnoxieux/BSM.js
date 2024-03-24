import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {Table} from "../model/Table.js";

export class TablesAPIRequest extends AbstractAPIRequest {
    /**
     * Get a single table for a given LeagueGroup
     *
     * Scope: Organization/Club
     *
     * @param leagueGroupID the ID for the leagueGroup
     */
    public async getSingleTable(leagueGroupID: number): Promise<Table | undefined> {
        return await this.apiCall<Table>(`leagues/${leagueGroupID}/table.json`, [])
    }
}