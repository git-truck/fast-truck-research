import { hydrateData } from "./hydrate"
import { GitCommitObject } from "./model"
import { readFileSync } from "fs"

const analyzedData = JSON.parse(readFileSync("../test-data/linux-analyzed.json").toString()) as GitCommitObject

const start = new Date().getTime()
hydrateData(analyzedData, "master", "/home/tjoms/Documents/GitHub/linux").then(() => {
    const now = new Date().getTime()
    console.log(now-start + " ms elapsed")
}).catch(() => {
    console.log("oh no :(")
})
