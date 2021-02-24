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

export const mocks = [
    {
        request: {
            query: searchTxt,
            variables: {
                userId: 'justinmeskan',
            },
        },
        result: {
            data: {
                user: {
                    repositories: {
                        nodes: [
                            {
                                createdAt: "2018-05-18T19:05:29Z",
                                description: null,
                                id: "MDEwOlJlcG9zaXRvcnkxMzM5OTM5NTE=",
                                name: "hrsf96-databases",
                                url: "https://github.com/justinmeskan/hrsf96-databases",
                                viewerPermission: "ADMIN",
                                __typename: "Repository"
                            },
                            {
                                createdAt: "2018-05-18T19:05:29Z",
                                description: null,
                                id: "MDEwOlJlcG9zaXRvcnkxMzM5OTM5NTE=",
                                name: "chessnutt",
                                url: "https://github.com/justinmeskan/chessnutt",
                                viewerPermission: "ADMIN",
                                __typename: "Repository"
                            }
                        ],
                        totalCount: 74
                    }
                }
            }
        }
    }
]
