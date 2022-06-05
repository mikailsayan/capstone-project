import StyledFooter from '../styled-components/StyledFooter';
import StyledImage from '../styled-components/StyledImage';
import useStore from '../../hooks/useStore';
import Link from 'next/link';
import StyledSectionCardRaw from '../styled-components/StyledSectionCardRaw';
import { useRouter } from 'next/router';

export default function Footer() {
	const setAppState = useStore(state => state.setAppState);
	const appState = useStore(state => state.appState);

	const router = useRouter();

	return (
		<StyledFooter>
			<StyledSectionCardRaw variant="footer">
				<article>
					<Link passHref href="/">
						{appState === 'projects' ? (
							<StyledImage
								variant="footer"
								src="/footerhomeclicked.svg"
								alt="footerhomeclickedsvg"
								width={42}
								height={42}
								onClick={() => {
									setAppState('projects');
									router.push('/');
								}}
							/>
						) : (
							<StyledImage
								variant="footer"
								src="/homepage.svg"
								alt="homepagesvg"
								width={42}
								height={42}
								onClick={() => {
									setAppState('projects');
									router.push('/');
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
								alt="footeraddclickedsvg"
								width={57}
								height={57}
								onClick={() => {
									setAppState('addproject');
									router.push('/addproject');
								}}
							/>
						) : (
							<StyledImage
								variant="footeradd"
								src="/addproject.svg"
								alt="addprojectsvg"
								width={57}
								height={57}
								onClick={() => {
									setAppState('addproject');
									router.push('/addproject');
								}}
							/>
						)}
					</Link>
				</article>
				<article>
					<Link passHref href="/featurelist">
						{appState === 'featurelist' ? (
							<StyledImage
								variant="footer"
								src="/footerprojectsclicked.svg"
								alt="footerprojectsclickedsvg"
								width={42}
								height={42}
								onClick={() => {
									setAppState('featurelist');
									router.push('/featurelist');
								}}
							/>
						) : (
							<StyledImage
								variant="footer"
								src="/project.svg"
								alt="projectsvg"
								width={42}
								height={42}
								onClick={() => {
									setAppState('featurelist');
									router.push('/featurelist');
								}}
							/>
						)}
					</Link>
				</article>
			</StyledSectionCardRaw>
		</StyledFooter>
	);
}
