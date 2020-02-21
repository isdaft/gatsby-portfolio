import React from 'react';

export const GithubCommitCard = (props) => {
	const { author, date, message, repo } = props.repoCommit;
	return(
			<div className="githubCard ">
				<div className="gitCommit">
				<h4>{repo}</h4>
				
				<p>{date}</p>
				</div>
				<p>{message}</p>
			</div>

	);

}