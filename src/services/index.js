import { graphql } from "gatsby";

export const GET_GITHUB_ACTIVTIY = () =>{ graphql`
      query($todaysDate:GitHub_DateTime, $threePrior:GitHub_DateTime){
        github {
          viewer {
            contributionsCollection(from: $threePrior, to: $todaysDate) {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      }
    `;
}