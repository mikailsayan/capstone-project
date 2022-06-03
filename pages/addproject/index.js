import AddProject from '../../src/components/AddProject/AddProject';
import StyledMain from '../../src/components/styled-components/StyledMain';
import Typography from '../../src/components/styled-components/Typography';
import StyledArticle from '../../src/components/styled-components/StyledArticle';
import useStore from '../../src/hooks/useStore';

export default function AddProjectPage() {
	const appState = useStore(state => state.appState);

	return (
		appState === 'addproject' && (
			<div>
				<StyledMain>
					<StyledArticle variant="headlinebox">
						<Typography variant="h1" size="2rem">
							Projekt hinzufügen
						</Typography>
					</StyledArticle>
					<AddProject />
				</StyledMain>
			</div>
		)
	);
}
