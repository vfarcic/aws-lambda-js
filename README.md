## Create A Project

```bash
# `jx create quickstart` and `jx import` commands can do something similar to the commands that follow.

# `--template` must be parametrized. We can get it through `jx create quickstart` or `jx import` parameters `--framework=lambda` and `--language=nodejs`.
# `--path` does not seem to allow `.` so setting it to a temporary dir `tmp`.
serverless create \
    --template aws-nodejs \
    --path tmp \
    --name my-serverless

mv tmp/handler.js .

mv tmp/serverless.yml .

rm -rf tmp

# The local client needs to be configured for `serverless` to have access to the account. It will differ from one provider to another.
export AWS_ACCESS_KEY_ID=[...] && export AWS_SECRET_ACCESS_KEY=[...]

# The content of the secret will differ from one provider to another. We cannot assume that serverless is running in the same provider as the `jx` cluster. Even if it does, there is no guarantee that the keys for serverless should be the same as for the k8s cluster.
kubectl create secret \
    generic aws-lambda \
    --from-literal=access-key-id=$AWS_ACCESS_KEY_ID \
    --from-literal=secret-access-key=$AWS_SECRET_ACCESS_KEY

# Apart from executing the commands, `jx create quickstart` and `jx import` should create only `jenkins-x.yml`. Use the one from this repo as an example.
```

## Questions?

* Should serverless be available in `jx get applications`? My guess is that no, at least for now.