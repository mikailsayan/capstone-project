import useStore from '../hooks/useStore';
import StyledDiv from './styled-components/StyledDiv';

export default function Stepbox() {
	const step = useStore(state => state.step);
	const maxStep = useStore(state => state.maxStep);

	return (
		<StyledDiv variant="stepbox">
			<p>
				{step} / {maxStep}
			</p>
		</StyledDiv>
	);
}
