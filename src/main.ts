import webSearch from "web-search";
import { providerList } from "./provider";

providerList.forEach(provider => {
    console.log(webSearch("google.com", provider.queryUrl));
})