import { hydrateData } from "./hydrate"
import { GitCommitObject } from "./model"
import { readFileSync } from "fs"

const analyzedData = JSON.parse(readFileSync("../test-data/git-truck-analyzed.json").toString()) as GitCommitObject

const start = new Date().getTime()
hydrateData(analyzedData, "main", "/home/tjoms/Documents/GitHub/git-truck").then(() => {
    const now = new Date().getTime()
    console.log(now-start + " ms elapsed")
})
