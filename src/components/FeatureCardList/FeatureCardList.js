import FeatureCard from '../FeatureCard/FeatureCard';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import StyledDiv from '../styled-components/StyledDiv';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledButton from '../styled-components/StyledButton';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';
import MySVG from '../MySVG';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';
import AddFeature from '../AddFeature/AddFeature';

export default function FeatureCardList() {
	const projectszustand = useStore(state => state.projectszustand);
	const dropdown = useStore(state => state.dropdown);
	const isClicked = useStore(state => state.isClicked);
	const dropSelect = useStore(state => state.dropSelect);
	const appState = useStore(state => state.appState);
	const addFeatureState = useStore(state => state.addFeatureState);
	const toggleAdd = useStore(state => state.toggleAdd);

	const addfeatureform = 'addfeatureform';

	return (
		appState === 'featurelist' && (
			<>
				<StyledSectionRaw variant="dropdown">
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
				</StyledSectionRaw>
				<StyledSectionRaw variant="list">
					{projectszustand.map(project => {
						const projectIndex = projectszustand.findIndex(
							projectIndex => projectIndex.id === project.id
						);
						return (
							project.selected && (
								<StyledSection key={project.id} variant="overflow">
									<StyledUL>
										{addFeatureState ? (
											<li>
												<AddFeature
													projectIndex={projectIndex}
													addfeatureform={addfeatureform}
												/>
											</li>
										) : (
											''
										)}
										{project.feature.map(feature => {
											const featureIndex = project.feature.findIndex(
												featureIndex => featureIndex.id === feature.id
											);
											return (
												<li key={feature.id}>
													<FeatureCard
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
				<StyledSectionRaw variant="buttonarea">
					{addFeatureState ? (
						<StyledButton variant="donebutton" form={addfeatureform}>
							Hinzufügen
						</StyledButton>
					) : (
						<StyledButton
							variant="mainbutton"
							type="submit"
							onClick={() => {
								toggleAdd();
							}}
						>
							Feature hinzufügen
						</StyledButton>
					)}
				</StyledSectionRaw>
			</>
		)
	);
}
