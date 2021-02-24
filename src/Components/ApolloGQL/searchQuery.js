import gql from "graphql-tag";

export const searchTxt = gql`
    query ($userId: String!){
        user(login: $userId) {
            repositories(last: 20, isLocked: false) {
                totalCount
                nodes {
                    createdAt
                    description
                    name
                    url
                    viewerPermission
                    id
                }
            }
        }
    }`