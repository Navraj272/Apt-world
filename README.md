# About

It is admin backend repository. It has all the backend APIs which are used on admin backoffice .
Admin-backend container is named after this repository . All the required commands are written in package.json file .

## Installation

1. Create .env file and Copy the .env.sample file , fill it with the required credentials .
2. If you are using the database from the docker , write the name of container in the host and external port .
3. This container will be up from entrypoint .

## Commands

Command to pull

```
make pull
```

Command to push

```
make push
```

## Testing

To run the test cases using Jest and generate an HTML report

Command to Test Routes

```
npm test
```

This will generate test-report.html to check testcases run following Command

```
start test-report.html
```

## Branches

```
Staging branch - develop
Production branch - main
```
