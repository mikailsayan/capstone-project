import ProjectCardList from '../src/components/ProjectCardList/ProjectCardList';
import StyledMain from '../src/components/styled-components/StyledMain';
import StyledArticle from '../src/components/styled-components/StyledArticle';
import Typography from '../src/components/styled-components/Typography';
import useStore from '../src/hooks/useStore';

export default function Home() {
	const appState = useStore(state => state.appState);
	return (
		appState === 'projects' && (
			<div>
				<StyledMain>
					<StyledArticle variant="headlinebox">
						<Typography variant="h1" size="2rem">
							Meine Projekte
						</Typography>
					</StyledArticle>
					<ProjectCardList />
				</StyledMain>
			</div>
		)
	);
}
