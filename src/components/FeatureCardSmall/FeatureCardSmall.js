import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import StyledInput from '../styled-components/StyledInput';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function FeatureCardSmall({ feature, index }) {
	const deleteFeature = useStore(state => state.deleteFeature);
	const appState = useStore(state => state.appState);
	const stateToFeatureView = useStore(state => state.stateToFeatureView);
	//const projectszustand = useStore(state => state.projectszustand);

	return (
		<StyledSection variant="small-grey">
			<StyledDiv variant="cardtitle">
				<StyledInput
					variant="featurecheckbox"
					id="featurecheckbox"
					name="featurecheckbox"
					type="checkbox"
				/>
				<Typography
					variant="h3"
					component="h3"
					size="1.7rem"
					onClick={() => {
						stateToFeatureView();
						console.log(appState);
					}}
				>
					{feature.name}
				</Typography>
				<div
					onClick={() => {
						deleteFeature(index);
					}}
				>
					<MySVG
						variant="cancel"
						position="absolute"
						size="2.6rem"
						top="2.1rem"
						right="2rem"
					/>
				</div>
			</StyledDiv>
			<StyledUL variant="list-in-card">
				{feature.todo.slice(0, 3).map(todo => {
					return (
						<StyledList key={todo.id} variant="featurelist-small">
							<StyledInput
								variant="todocheckbox"
								id="todocheckbox"
								name="todocheckbox"
								type="checkbox"
							/>
							{todo.name}
						</StyledList>
					);
				})}
			</StyledUL>
		</StyledSection>
	);
}
