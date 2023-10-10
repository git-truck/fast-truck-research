import { SimpleGit, SimpleGitOptions, simpleGit } from "simple-git"

const options: Partial<SimpleGitOptions> = {
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 6,
    trimmed: false,
 };
 
 const git: SimpleGit = simpleGit(options);