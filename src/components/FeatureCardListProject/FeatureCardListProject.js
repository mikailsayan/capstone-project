import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import StyledDiv from '../styled-components/StyledDiv';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledButton from '../styled-components/StyledButton';
import StyledArticle from '../styled-components/StyledArticle';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';
import MySVG from '../MySVG';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';

export default function FeatureCardListProject() {
	const projectszustand = useStore(state => state.projectszustand);
	const dropdown = useStore(state => state.dropdown);
	const isClicked = useStore(state => state.isClicked);
	const dropSelect = useStore(state => state.dropSelect);
	const appState = useStore(state => state.appState);
	const stateToAddFeature = useStore(state => state.stateToAddFeature);

	return (
		appState === 'featurelist' && (
			<>
				<StyledSectionRaw variant="list">
					<StyledArticle variant="dropdown-title">
						<Typography variant="h1" size="2rem">
							Projekte
						</Typography>
						<StyledDiv
							variant="dropdown"
							onClick={() => {
								isClicked();
							}}
						>
							<MySVG variant="dropdown" size="2.3rem" />
							{dropdown[0].isClicked ? (
								<StyledDiv variant="dropdown-menu">
									{projectszustand.map(project => {
										const index = projectszustand.findIndex(
											projectIndex => projectIndex.id === project.id
										);
										return (
											<StyledDiv
												key={project.id}
												variant="dropdown-content"
												onClick={() => {
													dropSelect(index);
												}}
											>
												<StyledParagraph variant="dropdown-content">
													{project.name}
												</StyledParagraph>
											</StyledDiv>
										);
									})}
								</StyledDiv>
							) : (
								''
							)}
						</StyledDiv>
					</StyledArticle>

					{projectszustand.map(project => {
						const projectIndex = projectszustand.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							project.selected && (
								<StyledSection key={project.id} variant="overflow">
									<StyledUL>
										{project.feature.map(feature => {
											const featureIndex = project.feature.findIndex(
												featureIndex => featureIndex.id === feature.id
											);
											return (
												<li key={feature.id}>
													<FeatureCardSmall
														project={project}
														feature={feature}
														featureIndex={featureIndex}
														projectIndex={projectIndex}
													/>
												</li>
											);
										})}
									</StyledUL>
								</StyledSection>
							)
						);
					})}
				</StyledSectionRaw>
				<StyledButton
					variant="mainbutton"
					type="submit"
					onClick={() => {
						stateToAddFeature();
					}}
				>
					Feature hinzufügen
				</StyledButton>
			</>
		)
	);
}
