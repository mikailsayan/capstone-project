import ProjectCard from '../ProjectCard/ProjectCard';
import StyledSection from '../styled-components/StyledSection';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';
import Link from 'next/link';
import useStore from '../../hooks/useStore';
import Typography from '../styled-components/Typography';

export default function ProjectCardList() {
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);
	const setAppState = useStore(state => state.setAppState);

	return (
		appState === 'projects' && (
			<>
				<Typography variant="h1">Meine Projekte</Typography>
				<StyledSection variant="overflow">
					<StyledUL>
						{projectszustand.map(project => {
							return (
								<li key={project.id}>
									<ProjectCard project={project} />
								</li>
							);
						})}
					</StyledUL>
				</StyledSection>
				<Link href="/addproject">
					<StyledSectionRaw variant="buttonarea">
						<StyledButton
							variant="mainbutton"
							type="submit"
							onClick={() => {
								setAppState('addproject');
							}}
						>
							Projekt hinzufügen
						</StyledButton>
					</StyledSectionRaw>
				</Link>
			</>
		)
	);
}
