import json
import boto3

comprehend = boto3.client('comprehend')

def analyze_sentiment(event, context):
    body = json.loads(event['body'])
    message = body['message']

    response = comprehend.detect_sentiment(
        Text=message,
        LanguageCode='en'
    )

    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
