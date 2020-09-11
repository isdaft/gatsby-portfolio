import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import gitIcon from 'assets/icons/github.svg'
import _ from 'lodash';
import moment from 'moment';

import { Wrapper, Grid, GithubGrid, Item, Content, Stats, AttenuatedContainer } from './styles';
import ReactFrappeChart from "react-frappe-charts";
import { FirebaseLink } from './checkHosting';
import { GithubActivityCard } from './GithubActivityCard';
import { GithubCommitCard } from './GithubCommitCard';




export const Projects = (props) => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
    viewer {
      repositories(first: 6, orderBy: {field: CREATED_AT, direction: DESC}) {
        edges {
          node {
            id
            name
            url
            description
            stargazers {
              totalCount
            }
            forkCount
            homepageUrl
            ref(qualifiedName: "master") {
              target {
                ... on GitHub_Commit {
                  id
                  history(first: 3) {
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
  }
      }
    `
  );
  //get commits from node and sort by latest
  const latestCommits = []; 
  console.log(edges);
  edges.map(({node}) => {
    if(node.ref != null){
      node.ref.target.history.edges.map(n => {
      const message = n.node.messageHeadline;
      const author = n.node.author.name;
      const date = n.node.author.date;
      const id = n.node.id;
      latestCommits.push({repo: node.name, author: author, date: date, message:message, id: node.id});
    })
    }
    
  });

  const latestCommitsOrdered = _.sortBy(latestCommits, function(o) { return new moment(o.date); }).reverse();
  console.log('latestCommitsOrdered', latestCommitsOrdered)
  //

  
  return (
    
    <Wrapper as={Container} id="projects">
      <h2>Github Activity & Projects</h2>
      <Grid>
        
        {edges.map(( {node} ) => (

          <Item
            key={node.id}
            as="div"
          >
            <Card>
              <Content>
                <h4><a target="_blank" href={node.url}>{node.name}</a></h4>
                <p>{node.description}</p>
              </Content>
              <Stats>
                <div>
                  <img src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
                
                <FirebaseLink hostingLink={node.homepageUrl}></FirebaseLink>

              </Stats>
            </Card>
          </Item>
        ))}
        
      </Grid>
      <AttenuatedContainer>
      
          <div id="readme" className="Box Box--condensed md js-code-block-container">
            <div className="Box-header d-flex flex-items-center flex-justify-between px-2">
              <div>
                <h3 className="Box-title pr-3">
                  <img src={gitIcon} style={{marginBottom: '0px' }}/>

                </h3>
                <span>YES. REAL-TIME GITHUB UPDATES</span>
              </div>
            </div>
            
            <div className="Box-body">
              <article className="github" >
                <h4>Realtime Activity Heatmap</h4>
              </article>
            </div>
            <GithubGrid>

              <div className="githubActivityGrid">
                <GithubActivityCard/>
              </div>

              <div className="githubCommits">

                {latestCommitsOrdered.slice(0, 6).map(( commit ) => (

                  <div key={commit.date} className="commitGroup">
                    <GithubCommitCard repoCommit={commit}/>
                  </div>
             
                ))}
              
                

              </div>
            </GithubGrid>
        </div>
      </AttenuatedContainer>
    </Wrapper>
  )
}

