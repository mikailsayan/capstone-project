import ProjectCardHome from '../ProjectCardHome/ProjectCardHome';
import StyledSection from '../styled-components/StyledSection';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import Link from 'next/link';
import useStore from '../../hooks/useStore';

export default function ProjectCardListHome() {
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);
	const setAppState = useStore(state => state.setAppState);

	return (
		appState === 'projects' && (
			<>
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
				<Link href="/addproject">
					<StyledButton
						variant="mainbutton"
						type="submit"
						onClick={() => {
							setAppState('addproject');
						}}
					>
						Projekt hinzufügen
					</StyledButton>
				</Link>
			</>
		)
	);
}
