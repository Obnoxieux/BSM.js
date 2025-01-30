import {LicenseFilter} from "../model/LicenseFilter.js";
import {License} from "../model/License.js";
import {AbstractAPIRequest} from "./AbstractAPIRequest.js";

export class ClubAPIRequest extends AbstractAPIRequest{
  /**
   * Get all licenses for a single club according to provided filters.
   *
   * @param clubID the club ID to query for
   * @param query filter parameters as an object
   * @returns a Promise of an array of `License` objects
   *
   * @throws ParseError
   * @throws FetchError
   */
  public async getLicensesForClub(clubID: number, query: LicenseFilter): Promise<License[]> {
    const queryParams = this.convertToSearchParams(query);

    return await this.apiCallGET<License[]>(`clubs/${clubID}/licenses.json`, queryParams)
  }
}