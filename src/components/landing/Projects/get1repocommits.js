query getCommitsFromRepository {
  repository(name: "streamy", owner: "isdaft") {
    ref(qualifiedName: "master") {
      target {
        ... on Commit {
          id
          history(first: 1) {
            pageInfo {
              hasNextPage
            }
            edges {
              node {
                messageHeadline
                oid
                message
                author {
                  name
                  email
                  date
                }
              }
            }
          }
        }
      }
    }
  }
}
