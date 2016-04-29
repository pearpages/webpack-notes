```bash
# create
git tag -a v.14 -m "my version whatever"

# push to remote
git push --tags
git push origin <tag_name> # recommended, so the team doesn't push old tags

# delete locally
git tag -d release01

# remove remote
git push origin :refs/tags/release01
```