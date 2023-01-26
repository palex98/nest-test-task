
# Simple reservations API

#### This recruitment task done for Redvike company by Oleksandr Pyzh.

#### The API is implemented with NestJS framework using MongoDB.
#### Contains 3 endpoints which are described in the next section of this Readme.
#### Also contains Docker deployment script for simple deployment and DB initialization.





## API Reference
<span style="color:green">This section contains short description of the API. For detailed information and examples please run the application locally and visit Swagger page on /api/docs.</span>.
<br/><br/>

#### Get reservations by amenityId and date.Sorted in ascending order by start time.

```http
  GET /api/reservations
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `amenityId` | `number` | **Required**. ID of the amenity to get reservations for |
| `date` | `number` | **Required**. Timestamp, represents wanted day of reservation |

<br/>

#### Get reservations for user, grouped by day

```http
  GET /api/reservations/${userId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. ID of the user to get reservations |

<br/>

#### Convert CSV to JSON
```http
  POST /api/convert
```
Takes .csv file as form-data and returns JSON with data parsed from file.

***Endpoint is secured with Basic auth(username-password).***


## Run Locally

Clone the project

```bash
  git clone https://github.com/palex98/redvike-test-task
```

Go to the project directory

```bash
  cd redvike-test
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

To deploy this project please update env-variables in docker-compose.yml file(if needed) and run following command in the project directory.

```bash
  docker compose up
```

