import React from 'react';
import { Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import { GithubFetchActivity } from "../../../hooks/githubActivity";
import ReactFrappeChart from "react-frappe-charts";


export const GithubActivityCard = () => {

	const { calendar, moment} = GithubFetchActivity();
  const data_points = {};
  const j_weeks = Object.values(calendar.weeks);


  

  for (var key in j_weeks) {

    for(var day in j_weeks[key].contributionDays){
      const weekDate = j_weeks[key].contributionDays[day].date;
      const unixTime = new Date(weekDate).getTime() / 1000;
      const uT = unixTime.toString();
      data_points[uT] = j_weeks[key].contributionDays[day].contributionCount;
    }
    
  }

  if(data_points.length < 10){
    return <div>Loading...</div>
  } else {
    return(
		<div key="githubactivitycard" >
			<ReactFrappeChart
		        type="heatmap"
		        colors={['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']}
		        data={{
		          dataPoints: data_points,
		          start: moment.startDate,
		          end: moment.endDate
		        }}
		        
		      />

        </div>
      
    );
  }




}