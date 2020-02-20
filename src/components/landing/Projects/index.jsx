import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'components/common'
import starIcon from 'assets/icons/star.svg'
import forkIcon from 'assets/icons/fork.svg'
import gitIcon from 'assets/icons/github.svg'

import { Wrapper, Grid, GithubGrid, Item, Content, Stats, AttenuatedContainer } from './styles';
import ReactFrappeChart from "react-frappe-charts";
import { FirebaseLink } from './checkHosting';
import { GithubActivityCard } from './GithubActivityCard';
import { GithubCommitCard } from './GithubCommitCard';




export const Projects = (props) => {
  const latestNodes = []; 
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
            repositories(
              first: 6
              orderBy: { field: CREATED_AT, direction: DESC }
            ) {
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
                }
              }
            }
          }
        }
      }
    `
  )
  edges.map(({node}) => {
    latestNodes.push(node.name);
  });
  

  console.log(latestNodes);
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
                {edges.map(( {node} ) => (
                  <div key={node.id}>
                    <GithubCommitCard repoName={node.name}/>
                  </div>
                ))}
              </div>
            </GithubGrid>
        </div>
      </AttenuatedContainer>
    </Wrapper>
  )
}

