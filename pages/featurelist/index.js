import FeatureCardList from '../../src/components/FeatureCardList/FeatureCardList';
import StyledMain from '../../src/components/styled-components/StyledMain';
import StyledArticle from '../../src/components/styled-components/StyledArticle';
import Dropdown from '../../src/components/Dropdown';
import useStore from '../../src/hooks/useStore';

export default function FeatureListPage() {
	const appState = useStore(state => state.appState);

	return (
		appState === 'featurelist' && (
			<div>
				<StyledMain>
					<StyledArticle variant="headlinebox">
						<Dropdown />
					</StyledArticle>
					<FeatureCardList />
				</StyledMain>
			</div>
		)
	);
}
