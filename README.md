## Create A Project

```bash
# `jx create quickstart` and `jx import` commands can do something similar to the commands that follow.

# The challenge is to allow people to choose `Lambda NodeJS`, `Lambda Go`, etc. when executing `jx create quickstart` without the batch mode. It might make sense to add an argument `deployment-type` which would default to `kubernetes`. If the value is `serverless` we could ask people different questions (e.g., vendor and language).

# `--template` must be parametrized. We can get it through `jx create quickstart` or `jx import` parameters `--framework=lambda` and `--language=nodejs`.
# `--path` does not seem to allow `.` so setting it to a temporary dir `tmp`.
serverless create \
    --template aws-nodejs \
    --path tmp \
    --name my-serverless

mv tmp/handler.js .

mv tmp/serverless.yml .

rm -rf tmp

# The local client needs to be configured for `serverless` CLI to have access to the account.
export AWS_ACCESS_KEY_ID=[...] && export AWS_SECRET_ACCESS_KEY=[...]

# The content of the secret will differ from one provider to another. We cannot assume that serverless is running in the same provider as the `jx` cluster. Even if it does, there is no guarantee that the keys for serverless should be the same as for the k8s cluster.
kubectl create secret \
    generic aws-lambda \
    --from-literal=access-key-id=$AWS_ACCESS_KEY_ID \
    --from-literal=secret-access-key=$AWS_SECRET_ACCESS_KEY

# Apart from executing the `serverless` and a few other commands, `jx create quickstart` and `jx import` should create only `jenkins-x.yml`. The one from this repo can be used as an example. Additional questions are inside it.
```

## Questions?

* Should serverless be available in `jx get applications`? My guess is that no, at least for now.