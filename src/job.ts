import { ProviderType } from "./provider";

export enum JobType {
    FullTime,
    PartTime,
    Contract,
    Internship,
    Temporary,
    Volunteer,
}

export interface Job {
    title: string;
    type: JobType;
    url: string;
    company: string;
    location: string;
    salary: number;
    description: string;
    provider: ProviderType;
}

export interface JobQuery {
    terms: string[];
    location?: string;
    salary?: number;
    type?: JobType;
    datePosted?: Date;
}