import {AbstractAPIRequest} from "../service/AbstractAPIRequest.js";
import {Match} from "../model/Match.js";

describe("Basic API", () => {
    class DummyAPIRequest extends AbstractAPIRequest {
        public override buildRequestURL(resource: string, queryParameters: string[][]): URL {
            return super.buildRequestURL(resource, queryParameters)
        }

        public override parseJSON<T>(response: Response): Promise<T> {
            return super.parseJSON<T>(response)
        }
    }

    test("correct URL building", () => {
        const request = new DummyAPIRequest("BOGUS")

        const dummyParams = [
            ["q", "baz"],
            ["foo", "bar"]
        ]
        const dummyResource = "stuff.json"

        expect(request.buildRequestURL(dummyResource, dummyParams).toString())
            .toBe("https://bsm.baseball-softball.de/stuff.json?q=baz&foo=bar&api_key=BOGUS")
    })


    it('should throw Error - JSON parsing of website that is not valid JSON', async () => {
        async function shouldThrow() {
            const request = new DummyAPIRequest("BOGUS")
            const response = await fetch("https://example.com/")
            const json = await request.parseJSON<Match>(response)
        }

        await expect(shouldThrow())
            .rejects
            .toThrow()
    });
})