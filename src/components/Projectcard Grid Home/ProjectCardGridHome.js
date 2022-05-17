import projects from '../../services/static-projects.json';
import ProjectCardHome from '../Projectcard Home/ProjectCardHome';

export default function ProjectCardGridHome() {
	return (
		<ul>
			{projects.map(project => {
				<li>
					<ProjectCardHome name={project.name} />
				</li>;
			})}
		</ul>
	);
}
