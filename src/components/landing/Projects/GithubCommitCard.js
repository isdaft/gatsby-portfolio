import React from 'react';

export const GithubCommitCard = (props) => {
	const { author, date, message, repo } = props.repoCommit;
	return(
			<div className="githubCard ">
				<h4>{message}</h4>
				<p>{repo}</p>
				<p>{date}</p>
			</div>

	);

}