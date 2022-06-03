import ProjectCard from '../ProjectCard/ProjectCard';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import Link from 'next/link';
import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';

export default function ProjectCardList() {
	const projects = useStore(state => state.projects);
	const setAppState = useStore(state => state.setAppState);

	return (
		<StyledSectionRaw variant="featurelist">
			<StyledArticle>
				<StyledUL>
					{projects.map(project => {
						return (
							<li key={project.id}>
								<ProjectCard project={project} />
							</li>
						);
					})}
				</StyledUL>
			</StyledArticle>
			<Link href="/addproject">
				<StyledArticle variant="buttonarea">
					<StyledButton
						variant="mainbutton"
						type="submit"
						onClick={() => {
							setAppState('addproject');
						}}
					>
						Projekt hinzufügen
					</StyledButton>
				</StyledArticle>
			</Link>
		</StyledSectionRaw>
	);
}
