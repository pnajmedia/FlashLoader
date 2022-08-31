import { gql } from '@apollo/client';

export const GRAPH_QRY = gql`
{
        getAllUsers{
        name
        phone
        email
        occupation}
}
`