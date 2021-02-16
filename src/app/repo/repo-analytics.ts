import { CommiterInfo } from "./commiters-info";
import { RepoCommit } from "./repo-commit";

export interface RepoAnalytics {
    totalCommits: number;
    commitersInfo: CommiterInfo[];
    commits: RepoCommit[];
}