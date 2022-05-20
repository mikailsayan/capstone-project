import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import StyledDiv from '../styled-components/StyledDiv';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';

export default function FeatureCardListProject() {
	const featureszustand = useStore(state => state.featureszustand);

	return (
		<StyledDiv variant="list">
			<Typography variant="h2" component="h2">
				Projektname
			</Typography>
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
