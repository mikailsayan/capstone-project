import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import StyledInput from '../styled-components/StyledInput';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function FeatureCardBrief({ project, feature, projectIndex, featureIndex }) {
	const deleteFeature = useStore(state => state.deleteFeature);
	const selectFeature = useStore(state => state.selectFeature);

	return (
		<StyledSectionCard
			variant="small-grey"
			style={{
				background:
					project.color === 'blue'
						? 'var(--blue-project)'
						: project.color === 'purple'
						? 'var(--purple-project)'
						: project.color === 'yellow'
						? 'var(--yellow-project)'
						: project.color === 'red'
						? 'var(--red-project)'
						: project.color === 'green'
						? 'var(--green-project)'
						: project.color === ''
						? 'var(--card-grey)'
						: '',
			}}
		>
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
						selectFeature(projectIndex, featureIndex);
					}}
				>
					{feature.name}
				</Typography>
				<div
					onClick={() => {
						deleteFeature(projectIndex, featureIndex);
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
		</StyledSectionCard>
	);
}
