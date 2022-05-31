import ProjectCardHome from '../ProjectCardHome/ProjectCardHome';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import useStore from '../../hooks/useStore';

export default function ProjectCardListHome() {
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);

	return (
		appState === 'projects' && (
			<StyledSection variant="overflow">
				<StyledUL>
					{projectszustand.map(project => {
						return (
							<li key={project.id}>
								<ProjectCardHome project={project} />
							</li>
						);
					})}
				</StyledUL>
			</StyledSection>
		)
	);
}
