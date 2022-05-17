import projects from '../../services/static-projects.json';
import ProjectCardHome from '../Projectcard Home/ProjectCardHome';

export default function ProjectCardGridHome() {
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
