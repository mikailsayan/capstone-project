import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';

export default function FeatureCardListProject() {
	const featureszustand = useStore(state => state.featureszustand);

	return (
		<StyledSection variant="overflow">
			<Typography variant="h2" component="h2">
				Projektname
			</Typography>
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
	);
}
