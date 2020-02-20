import { useStaticQuery, graphql } from "gatsby";

import moment from 'moment';

export const GithubFetchActivity = () => {
 
  const todaysDate = moment().format("YYYY-MM-DDTHH:mm:ss");
  const threePrior = moment().subtract(3, 'months').format("YYYY-MM-DDTHH:mm:ss");
  
  const { github } = useStaticQuery(
    graphql`
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
    `
  )
  return {calendar:github.viewer.contributionsCollection.contributionCalendar, 
          moment: {
            startDate: moment().subtract(3, 'months')._d, 
            endDate: moment()._d
          }
        };
}
