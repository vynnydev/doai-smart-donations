import json
import redis
import os

redis_host = os.environ['REDIS_HOST']
redis_client = redis.StrictRedis(host=redis_host, port=6379, decode_responses=True)

def cache_donation(event, context):
    body = json.loads(event['body'])
    donor_name = body['donorName']
    amount = body['amount']
    message = body['message']
    cache_key = f"donation:{donor_name}"

    cached_donation = redis_client.get(cache_key)

    if cached_donation:
        return {
            'statusCode': 200,
            'body': cached_donation
        }

    donation = {
        'donorName': donor_name,
        'amount': amount,
        'message': message,
        'donationDate': datetime.utcnow().isoformat(),
    }

    redis_client.setex(cache_key, 3600, json.dumps(donation))

    return {
        'statusCode': 200,
        'body': json.dumps(donation)
    }
