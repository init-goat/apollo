export const port = 8080;
export const env = {
    development: {
        dbString: 'mongodb://localhost:8000/graphql'
    },
    production: {
        dbString: 'mongodb://yourhost/graphql-prod'
    }
}