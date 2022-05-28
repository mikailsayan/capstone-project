import StyledFooter from '../styled-components/StyledFooter';
import StyledImage from '../styled-components/StyledImage';
import StyledUL from '../styled-components/StyledUL';
import useStore from '../../hooks/useStore';
import Link from 'next/link';

export default function Footer() {
	const stateToProjects = useStore(state => state.stateToProjects);
	const stateToFeatureList = useStore(state => state.stateToFeatureList);

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
								stateToProjects();
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
								stateToFeatureList();
							}}
						/>
					</Link>
				</li>
			</StyledUL>
		</StyledFooter>
	);
}
