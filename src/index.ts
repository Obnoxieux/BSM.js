import { StatsType } from "./enum/StatsType.js"
import { StatsAPIRequest } from "./service/StatsAPIRequest.js"

const request = new StatsAPIRequest()

const stats = await request.loadPersonalStatistics(StatsType.batting, 2023)

console.log(stats)
console.log(stats.summaries[0].values)