import ProjectCardList from '../src/components/ProjectCardList/ProjectCardList';
import StyledMain from '../src/components/styled-components/StyledMain';
import StyledArticle from '../src/components/styled-components/StyledArticle';
import Typography from '../src/components/styled-components/Typography';

export default function Home() {
	return (
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
	);
}
