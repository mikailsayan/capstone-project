import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import StyledDiv from '../styled-components/StyledDiv';
import StyledParagraph from '../styled-components/StyledParagraph';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';

export default function FeatureCardListProject() {
	const featureszustand = useStore(state => state.featureszustand);
	const dropdown = useStore(state => state.dropdown);
	const isClicked = useStore(state => state.isClicked);

	return (
		<StyledDiv variant="list">
			<StyledDiv variant="dropdown-absolute">
				<StyledDiv
					variant="dropdown"
					onClick={() => {
						isClicked();
					}}
				>
					<Typography variant="h2" component="h2">
						Projektname
					</Typography>
					{dropdown[0].isClicked ? (
						<StyledDiv variant="dropdown-menu">
							<StyledDiv variant="dropdown-content">
								<StyledParagraph variant="dropdown-content">
									Project 1 Dropdown
								</StyledParagraph>
							</StyledDiv>
							<StyledDiv variant="dropdown-content">
								<StyledParagraph variant="dropdown-content">
									Project 2 Dropdown
								</StyledParagraph>
							</StyledDiv>
							<StyledDiv variant="dropdown-content">
								<StyledParagraph variant="dropdown-content">
									Project 3 Dropdown
								</StyledParagraph>
							</StyledDiv>
						</StyledDiv>
					) : (
						''
					)}
				</StyledDiv>
			</StyledDiv>
			<StyledSection variant="overflow">
				<StyledUL>
					{featureszustand.map(feature => {
						const index = featureszustand.findIndex(
							featureIndex => featureIndex.id === feature.id
						);
						return (
							<li key={feature.id}>
								<FeatureCardSmall index={index} feature={feature} />
							</li>
						);
					})}
				</StyledUL>
			</StyledSection>
		</StyledDiv>
	);
}
