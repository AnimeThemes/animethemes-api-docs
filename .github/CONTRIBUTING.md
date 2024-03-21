- [Assignment](#assignment)
- [Development Environment](#development-environment)
- [Feature Branch Workflow](#feature-branch-workflow)
- [Cleanup Before Pull Request](#cleanup-before-pull-request)
- [Pull Request](#pull-request)

## Assignment

Unless otherwise specified, any issue that does not have an assignee can be claimed by any volunteer.

Leave a comment in the issue indicating interest so that the assignee can be designated by a member. This is a requirement in Github to allow assignment of contributors outside of the organization by members. 

If further discussion is needed before work can be started, please make use of the `#api` channel on the discord.

## Development Environment

Follow the Installation Guide in the README to ensure a functional local instance of the AnimeThemes API Docs forked from this repository.

Set this repository as upstream to the forked repository.

`git remote add upstream git@github.com:AnimeThemes/animethemes-api-docs.git`

Pull upstream changes so that the local main branch is even with the upstream main branch.

`git pull upstream main`

Push upstream changes to the forked remote main branch if needed.

`git push`

## Feature Branch Workflow

Once the main branch is even with upstream, create a new feature branch from the main branch. The new feature branch name should be descriptive.

`git branch new-feature-branch`

Switch to the new feature branch.

`git checkout new-feature-branch`

Make changes in the new feature branch.

Stage changes. Commit changes. Please include ticket ID's and use [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).

## Cleanup Before Pull Request

Fetch the upstream main branch and merge with the fork repo's main branch.
```
git fetch upstream main
git checkout main
git merge upstream/main
```

If there were any new commits, rebase the new feature branch.
```
git checkout new-feature-branch
git rebase main
```

## Pull Request

Push changes to remote.

`git push --set-upstream origin new-feature-branch`

Create Pull Request from the new feature branch to the upstream main branch.

## Pruning

Once the Pull Request is merged, delete the feature branch locally.

`git branch --delete new-feature-branch`

Delete the remote feature branch.

`git push origin --delete new-feature-branch`

Pull upstream changes so that the fork main branch is even with upstream.

`git pull upstream main`

Push upstream changes to the fork's remote if needed.

`git push`

## References

* [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
* [Github Forking](https://gist.github.com/Chaser324/ce0505fbed06b947d962)