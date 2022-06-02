import ProjectCardHome from '../ProjectCardHome/ProjectCardHome';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import Link from 'next/link';
import useStore from '../../hooks/useStore';
import Typography from '../styled-components/Typography';
import StyledArticle from '../styled-components/StyledArticle';

export default function ProjectCardListHome() {
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);
	const setAppState = useStore(state => state.setAppState);

	return (
		appState === 'projects' && (
			<section>
				<Typography variant="h1">Meine Projekte</Typography>
				<StyledArticle variant="overflow">
					<StyledUL>
						{projectszustand.map(project => {
							return (
								<li key={project.id}>
									<ProjectCardHome project={project} />
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
			</section>
		)
	);
}
