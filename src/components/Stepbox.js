import useStore from '../hooks/useStore';
import StyledDiv from './styled-components/StyledDiv';
import Typography from './styled-components/Typography';

export default function Stepbox() {
	const step = useStore(state => state.step);
	const maxStep = useStore(state => state.maxStep);

	return (
		<StyledDiv variant="stepbox">
			<Typography variant="p" weight="bold" size="1.4rem">
				{step} / {maxStep}
			</Typography>
		</StyledDiv>
	);
}
