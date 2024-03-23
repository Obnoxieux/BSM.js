import {AbstractAPIRequest} from "./AbstractAPIRequest.js";
import {Table} from "../model/Table.js";

export class TablesAPIRequest extends AbstractAPIRequest {
    /**
     * Get a single table for a given LeagueGroup
     *
     * Scope: Organization/Club
     * @param leagueGroupID
     */
    async getSingleTable(leagueGroupID: number): Promise<Table> {
        const response = await this.apiCall<Table>(`leagues/${leagueGroupID}/table.json`)
        return response as Table
    }
}