import { gql } from 'apollo-server-express';

const typeDefs = gql`

    """
    Type declaration. For example:
    type Car{
        id:ID
        model:String
        make:String
        color:String
    }
    """

    """
    Input declaration. For example:
    input peopleInput{
        id:ID
        firstName:String
        lastName:String
    }
    """

    """
    Query declaration. For example:
    type Query{
        getAllCars:[Car]
    }
    """

    """
    Mutation declaration. For example:
    type Mutation{
        addAPerson(input:peopleInput):String
    }
    """
`

export default typeDefs