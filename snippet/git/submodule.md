# Git submodule

Note: Git submodule not compatible with __github page__

## Add
- add URL with `.git` extension
- `git submodule add <URL>` 
- specific branch
- `git submodule add -b main <URL>` 
- specific directory
- `git submodule add <url> lib/utility`

## Init

- `git submodule init`

## Update

- `git submodule update --remote`
- or
- `git submodule update --init --recursive`
- `git submodule update --remote`

## Pull

- `git pull --recurse-submodules`

## Exec

- `git submodule foreach --recursive '<command>'`

## Remove

- `git submodule deinit -f <dir>`
- `rm -rf .git/modules/<dir>`
- `git rm -f <dir>`
- `git rm --cached <dir>`

## Later, change to specific tag branch

- `cd` submodule_directory
- `git checkout v1.0`
- `cd ..`
- `git add submodule_directory`
- `git commit -m "moved submodule to v1.0"`
- `git push`

Then, another developer who wants to have submodule_directory changed to that tag, does this

- `git pull`
- `git submodule update --init`
