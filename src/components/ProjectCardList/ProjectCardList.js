import ProjectCard from '../ProjectCard/ProjectCard';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import Link from 'next/link';
import useStore from '../../hooks/useStore';
import StyledArticle from '../styled-components/StyledArticle';
import StyledSectionCardRaw from '../styled-components/StyledSectionCardRaw';
import { useRouter } from 'next/router';

export default function ProjectCardList() {
	const projects = useStore(state => state.projects);
	const setAppState = useStore(state => state.setAppState);

	const router = useRouter();

	return (
		<StyledSectionCardRaw variant="featurelist">
			<StyledArticle>
				<StyledUL>
					{projects.map(project => {
						const projectIndex = projects.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							<li key={project.id}>
								<ProjectCard project={project} projectIndex={projectIndex} />
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
							router.push('/addproject');
						}}
					>
						Projekt hinzufügen
					</StyledButton>
				</StyledArticle>
			</Link>
		</StyledSectionCardRaw>
	);
}
