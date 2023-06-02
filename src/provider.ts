export enum ProviderType {
    Workday,
  }

export interface Provider {
    name: string;
    type: ProviderType;
    url: string;
    queryUrl: string;
    description: string;
    logo: string;
}

export const Workday: Provider = {
    name: "Workday",
    type: ProviderType.Workday,
    url: "https://www.workday.com/en-us/homepage.html",
    queryUrl: "site:myworkdayjobs.com",
    description: "Workday is a leading provider of enterprise cloud applications for finance and human resources.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Workday_Logo.png",
}

export const providerList: Provider[] = [Workday]