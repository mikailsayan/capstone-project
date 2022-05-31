import StyledFooter from '../styled-components/StyledFooter';
import StyledImage from '../styled-components/StyledImage';
import StyledUL from '../styled-components/StyledUL';
import useStore from '../../hooks/useStore';
import Link from 'next/link';

export default function Footer() {
	const setAppState = useStore(state => state.setAppState);

	return (
		<StyledFooter>
			<StyledUL variant="footer">
				<li>
					<Link href="/">
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
				</li>
				<li>
					<Link href="/addproject">
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
				</li>
				<li>
					<Link href="/projects">
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
				</li>
			</StyledUL>
		</StyledFooter>
	);
}
