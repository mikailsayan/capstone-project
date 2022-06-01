import StyledFooter from '../styled-components/StyledFooter';
import StyledImage from '../styled-components/StyledImage';
import useStore from '../../hooks/useStore';
import Link from 'next/link';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';

export default function Footer() {
	const setAppState = useStore(state => state.setAppState);

	return (
		<StyledFooter>
			<StyledSectionRaw variant="footer">
				<article>
					<Link passHref href="/">
						<StyledImage
							variant="footer"
							src="/homepage.svg"
							alt="homepage-svg"
							width={42}
							height={42}
							onClick={() => {
								setAppState('projects');
							}}
						/>
					</Link>
				</article>
				<article>
					<Link passHref href="/addproject">
						<StyledImage
							variant="footeradd"
							src="/addproject.svg"
							alt="addproject-svg"
							width={57}
							height={57}
							onClick={() => {
								setAppState('addproject');
							}}
						/>
					</Link>
				</article>
				<article>
					<Link passHref href="/projects">
						<StyledImage
							variant="footer"
							src="/project.svg"
							alt="project-svg"
							width={42}
							height={42}
							onClick={() => {
								setAppState('featurelist');
							}}
						/>
					</Link>
				</article>
			</StyledSectionRaw>
		</StyledFooter>
	);
}
