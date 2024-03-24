import { StatsType } from "./enum/StatsType.js"
import { StatsAPIRequest } from "./service/StatsAPIRequest.js"
import 'dotenv/config.js'

const request = new StatsAPIRequest(process.env.TEST_API_KEY!)

const stats = await request.getStatisticsForPerson(76222, StatsType.batting, 2023)

console.log(stats)
console.log(stats.summaries[0].values)