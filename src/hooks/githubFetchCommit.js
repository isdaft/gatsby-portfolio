import { useStaticQuery, graphql } from "gatsby";

export const githubFetchCommit = () => {

  const name = "streamy".toString();

  const { github } = useStaticQuery(
  graphql`
    query($name:String!) {
      github {
        viewer {
          repository(name: $name) {
            ref(qualifiedName: "master") {
              target {
                ... on GitHub_Commit {
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
      }
    }
  `
  );
  
  return {repo: github.viewer.repository};
}