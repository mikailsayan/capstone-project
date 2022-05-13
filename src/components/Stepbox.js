import useStore from '../hooks/useStore';

export default function Stepbox() {
	const step = useStore(state => state.step);
	const maxStep = useStore(state => state.maxStep);

	return (
		<div>
			<p>
				{step} / {maxStep}
			</p>
		</div>
	);
}
