## Create A Project

```bash
npm install -g serverless

# ... or ...

npm update -g serverless

serverless create \
    --template aws-nodejs \
    --path tmp \
    --name my-serverless

mv tmp/handler.js .

mv tmp/serverless.yml .

rm -rf tmp

export AWS_ACCESS_KEY_ID=AKIAJUMYZLSXTUC3AZMQ

export AWS_SECRET_ACCESS_KEY=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

kubectl create secret \
    generic codecov \
    --from-literal=token=$CODECOV_TOKEN
```

## Add to pipeline

```bash
serverless deploy \
    --region $AWS_DEFAULT_REGION \
    --verbose

# curl -X POST https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/hello

serverless invoke \
    --region $AWS_DEFAULT_REGION \
    --function hello \
    --log

serverless logs \
    --region $AWS_DEFAULT_REGION \
    --function hello \
    --tail

serverless remove \
    --region $AWS_DEFAULT_REGION

        # "buildPackGitRef": {
        #   "type": "string"
        # },
        # "buildPackGitURL": {
        #   "type": "string"
        # },
```