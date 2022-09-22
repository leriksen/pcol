import { load } from "js-yaml";
import { readFile } from "fs/promises";

const data = load(await readFile("data/pipelines.yml", "utf8"));
console.log(JSON.stringify(data, null, 2));

// read pipeline list

// start pipelines

// collect results

// report
