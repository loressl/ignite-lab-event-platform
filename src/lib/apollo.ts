import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oj7yep0c1t01xsdlkabu7q/master',
    cache: new InMemoryCache()
})