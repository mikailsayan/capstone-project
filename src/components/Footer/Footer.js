import StyledFooter from '../styled-components/StyledFooter';
import StyledImage from '../styled-components/StyledImage';
import useStore from '../../hooks/useStore';
import Link from 'next/link';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';

export default function Footer() {
	const setAppState = useStore(state => state.setAppState);
	const appState = useStore(state => state.appState);

	return (
		<StyledFooter>
			<StyledSectionRaw variant="footer">
				<article>
					<Link passHref href="/">
						{appState === 'projects' ? (
							<StyledImage
								variant="footer"
								src="/footerhomeclicked.svg"
								alt="footerhomeclicked-svg"
								width={42}
								height={42}
								onClick={() => {
									setAppState('projects');
								}}
							/>
						) : (
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
						)}
					</Link>
				</article>
				<article>
					<Link passHref href="/addproject">
						{appState === 'addproject' ? (
							<StyledImage
								variant="footeradd"
								src="/footeraddclicked.svg"
								alt="footeraddclicked-svg"
								width={57}
								height={57}
								onClick={() => {
									setAppState('addproject');
								}}
							/>
						) : (
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
						)}
					</Link>
				</article>
				<article>
					<Link passHref href="/projects">
						{appState === 'featurelist' ? (
							<StyledImage
								variant="footer"
								src="/footerprojectsclicked.svg"
								alt="footerprojectsclicked-svg"
								width={42}
								height={42}
								onClick={() => {
									setAppState('featurelist');
								}}
							/>
						) : (
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
						)}
					</Link>
				</article>
			</StyledSectionRaw>
		</StyledFooter>
	);
}
