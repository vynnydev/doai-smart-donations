import json
import boto3
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('DoAITable')  # Nome da tabela DynamoDB

def store_donation(event, context):
    body = json.loads(event['body'])
    donor_name = body['donorName']
    amount = body['amount']
    message = body['message']
    donation_date = datetime.now().isoformat()

    item = {
        'donorName': donor_name,
        'amount': amount,
        'message': message,
        'donationDate': donation_date,
    }

    table.put_item(Item=item)

    return {
        'statusCode': 200,
        'body': json.dumps({'message': 'Donation stored successfully'})
    }
