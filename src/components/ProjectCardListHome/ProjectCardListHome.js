import projects from '../../services/static-projects.json';
import ProjectCardHome from '../ProjectCardHome/ProjectCardHome';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';

export default function ProjectCardListHome() {
	return (
		<StyledSection variant="overflow">
			<StyledUL>
				{projects.map(project => {
					return (
						<li key={project.id}>
							<ProjectCardHome project={project} />
						</li>
					);
				})}
			</StyledUL>
		</StyledSection>
	);
}
