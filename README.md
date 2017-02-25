
# API Project: Timestamp Microservice for FCC

### User stories :
1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2) I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
3) If it does, it returns both the Unix timestamp and the natural language form of that date.
4) If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:
https://fearful-roarer.gomix.me/December%2015,%202015
https://fearful-roarer.gomix.me/1450137600
Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }