import FeatureCardSmall from '../FeatureCardSmall/FeatureCardSmall';
import StyledSection from '../styled-components/StyledSection';
import StyledUL from '../styled-components/StyledUL';
import useStore from '../../hooks/useStore';

export default function FeatureCardListProject() {
	const featureszustand = useStore(state => state.featureszustand);

	return (
		<StyledSection variant="overflow">
			<StyledUL>
				{featureszustand.map(feature => {
					return (
						<li key={feature.id}>
							<FeatureCardSmall feature={feature} />
						</li>
					);
				})}
			</StyledUL>
		</StyledSection>
	);
}
