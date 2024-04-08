import {AbstractAPIRequest} from "../service/AbstractAPIRequest.js";

describe("Basic API", () => {
    class DummyAPIRequest extends AbstractAPIRequest {
        public override buildRequestURL(queryParameters: string[][], resource: string): URL {
            return super.buildRequestURL(queryParameters, resource)
        }
    }

    test("correct URL building", () => {
        const request = new DummyAPIRequest("BOGUS")

        const dummyParams = [
            ["q", "baz"],
            ["foo", "bar"]
        ]
        const dummyResource = "stuff.json"

        expect(request.buildRequestURL(dummyParams, dummyResource).toString())
            .toBe("https://bsm.baseball-softball.de/stuff.json?q=baz&foo=bar&api_key=BOGUS")
    })
})