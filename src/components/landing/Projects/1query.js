{
  repository(owner: "isdaft", name: "streamy") {
    object(expression: "master") {
      ... on Commit {
        history {
          nodes {
            changedFiles
            author {
              name
              date
            }
            message
            id
            repository {
              homepageUrl
              id
              name
            }
          }
        }
      }
    }
  }
}
