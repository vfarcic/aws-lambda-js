```bash
open "https://docs.aws.amazon.com/lambda/latest/dg/getting-started-create-function.html"

# Follow the instructions

LAMBDA_ROLE=[...]

# Delete the function

zip function.zip *.js

export AWS_ACCESS_KEY_ID=[...]

export AWS_SECRET_ACCESS_KEY=[...]

export AWS_DEFAULT_REGION=[...]

aws lambda list-functions

aws lambda create-function \
    --function-name my-function \
    --runtime nodejs10.x \
    --role $LAMBDA_ROLE \
    --handler index.handler \
    --zip-file fileb://function.zip

# or...

aws lambda update-function-code \
    --function-name my-function \
    --zip-file fileb://function.zip

aws lambda list-functions

open "https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html" # Updating a Function with Additional Dependencies

aws lambda invoke \
    --function-name my-function out \
    --log-type Tail

aws lambda invoke \
    --function-name my-function out \
    --log-type Tail \
    --query 'LogResult' --output text \
    |  base64 --decode

aws lambda invoke \
    --function-name my-function \
    --payload '{"key": "value"}' response.json

aws logs get-log-events \
    --log-group-name /aws/lambda/my-function \
    --log-stream-name=file://out \
    --limit 5

aws lambda invoke \
    --function-name my-function  \
    --invocation-type Event \
    --payload '{ "key": "value" }' \
    response.json

# Create an API gateway and test the function with `curl`
```