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