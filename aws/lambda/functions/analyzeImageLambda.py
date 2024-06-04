import json
import base64
import boto3

rekognition = boto3.client('rekognition')

def analyze_image(event, context):
    body = json.loads(event['body'])
    image_base64 = body['imageBase64']
    image_bytes = base64.b64decode(image_base64)

    response = rekognition.detect_labels(
        Image={'Bytes': image_bytes},
        MaxLabels=10,
        MinConfidence=75
    )

    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }
