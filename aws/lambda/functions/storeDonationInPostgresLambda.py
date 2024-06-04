import json
import psycopg2
import os
from datetime import datetime

db_host = os.environ['PG_HOST']
db_name = os.environ['PG_DATABASE']
db_user = os.environ['PG_USER']
db_password = os.environ['PG_PASSWORD']
db_port = os.environ.get('PG_PORT', 5432)

def store_donation_in_postgres(event, context):
    body = json.loads(event['body'])
    donor_name = body['donorName']
    amount = body['amount']
    message = body['message']
    donation_date = datetime.utcnow().isoformat()

    connection = psycopg2.connect(
        host=db_host,
        database=db_name,
        user=db_user,
        password=db_password,
        port=db_port
    )

    cursor = connection.cursor()
    query = """
        INSERT INTO donations (donorName, amount, message, donationDate)
        VALUES (%s, %s, %s, %s) RETURNING id;
    """
    cursor.execute(query, (donor_name, amount, message, donation_date))
    donation_id = cursor.fetchone()[0]

    connection.commit()
    cursor.close()
    connection.close()

    return {
        'statusCode': 200,
        'body': json.dumps({'donationId': donation_id, 'message': 'Donation stored successfully'})
    }
