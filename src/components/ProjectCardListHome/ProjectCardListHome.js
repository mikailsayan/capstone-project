import projects from '../../services/static-projects.json';
import ProjectCardHome from '../ProjectCardHome/ProjectCardHome';

export default function ProjectCardListHome() {
	return (
		<ul>
			{projects.map(project => {
				return (
					<li key={project.id}>
						<ProjectCardHome project={project} />
					</li>
				);
			})}
		</ul>
	);
}
