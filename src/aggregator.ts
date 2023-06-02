import webSearch from "web-search";
import { JobQuery, Job } from "./job";
import { Provider, providerList } from "./provider";

// takes in search terms for a jobquery
export function search(query: JobQuery): Job[] {
    let jobs: Job[] = [];
    providerList.forEach(provider => {
        const providerQuery: JobQuery = {
            terms: [provider.queryUrl].concat(query.terms),
            location: query.location,
            salary: query.salary,
            type: query.type,
            datePosted: query.datePosted,
        };
        jobs = jobs.concat(searchProvider(provider, providerQuery));
    });
    return jobs;
}

function createQuery(provider: Provider, query: JobQuery): string {
    return webSearch(provider.url, query.terms.join(" "));
}


// returns a list of jobs with a valid provider (so we can parse it later)