import FeatureCardList from '../../src/components/FeatureCardList/FeatureCardList';
import StyledMain from '../../src/components/styled-components/StyledMain';
import StyledArticle from '../../src/components/styled-components/StyledArticle';
import Typography from '../../src/components/styled-components/Typography';
import Dropdown from '../../src/components/Dropdown';
import useStore from '../../src/hooks/useStore';

export default function FeatureListPage() {
	const appState = useStore(state => state.appState);

	return (
		appState === 'featurelist' && (
			<div>
				<StyledMain>
					<StyledArticle variant="headlinebox">
						<Typography variant="h1" size="2rem">
							Projekte
						</Typography>
						<Dropdown />
					</StyledArticle>
					<FeatureCardList />
				</StyledMain>
			</div>
		)
	);
}
