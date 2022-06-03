import FeatureCardList from '../../src/components/FeatureCardList/FeatureCardList';
import EditTodo from '../../src/components/EditTodo/EditTodo';
import StyledMain from '../../src/components/styled-components/StyledMain';
import StyledArticle from '../../src/components/styled-components/StyledArticle';
import Typography from '../../src/components/styled-components/Typography';
import Dropdown from '../../src/components/Dropdown';

export default function Home() {
	return (
		<div>
			<StyledMain>
				<StyledArticle variant="headlinebox">
					<Typography variant="h1" size="2rem">
						Projekte
					</Typography>
					<Dropdown />
				</StyledArticle>
				<FeatureCardList />
				<EditTodo />
			</StyledMain>
		</div>
	);
}
