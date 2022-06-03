import ProjectCard from '../ProjectCard/ProjectCard';
import StyledSection from '../styled-components/StyledSection';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import Link from 'next/link';
import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';

export default function ProjectCardList() {
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);
	const setAppState = useStore(state => state.setAppState);

	return (
		appState === 'projects' && (
			<StyledSection>
				<StyledArticle variant="overflow">
					<StyledUL>
						{projectszustand.map(project => {
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
			</StyledSection>
		)
	);
}
