import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import relax from 'assets/illustrations/moment_to_relax.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Hi There!</h1>
				<h4>I’m Ben and I’m a Frontend developer!</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={relax} alt="I’m Ben and I’m a Frontend developer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
