import StyledSection from '../styled-components/StyledSection';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function EditFeatureProject({ projectIndex, featureIndex, feature }) {
	const enableEdit = useStore(state => state.enableEdit);
	const controlFeature = useStore(state => state.controlFeature);
	const controlBegin = useStore(state => state.controlBegin);
	const controlEnd = useStore(state => state.controlEnd);

	return feature.edit ? (
		<StyledSection variant="big-grey">
			<div
				onClick={() => {
					enableEdit(projectIndex, featureIndex);
				}}
			>
				<MySVG
					variant="save2"
					position="absolute"
					color="var(--save-icon)"
					size="2.6rem"
					top="1.8rem"
					right="2.5rem"
				/>
			</div>

			<StyledLabel variant="default" htmlFor="featurename">
				Featurename
			</StyledLabel>
			<StyledInput
				required
				variant="full"
				id="featurename"
				name="featurename"
				type="text"
				value={feature.name}
				onChange={event => {
					controlFeature(projectIndex, featureIndex, event.target.value);
				}}
			/>
			<StyledLabel variant="default" htmlFor="begindate">
				Startdatum:
			</StyledLabel>
			<StyledDiv variant="center">
				<StyledInput
					variant="date"
					id="begindate"
					name="begindate"
					type="date"
					value={feature.begin}
					onChange={event => {
						controlBegin(projectIndex, featureIndex, event.target.value);
					}}
				/>
				<MySVG variant="calender" size="2.9rem" />
			</StyledDiv>
			<StyledLabel variant="default" htmlFor="enddate">
				Enddatum:
			</StyledLabel>
			<StyledDiv variant="center">
				<StyledInput
					variant="date"
					id="enddate"
					name="enddate"
					type="date"
					value={feature.end}
					onChange={event => {
						controlEnd(projectIndex, featureIndex, event.target.value);
					}}
				/>
				<MySVG variant="calender" size="2.9rem" />
			</StyledDiv>
			<StyledDiv variant="overflow">
				<StyledUL variant="list-in-card">
					{feature.todo.map(todo => {
						return (
							<StyledList key={todo.id} variant="todo-edit-feature">
								<MySVG
									variant="edit"
									position="absolute"
									size="2.3rem"
									left="1rem"
									top="0.8rem"
								/>
								{todo.name}
								{todo.complexity === 'easy' ? (
									<StyledDiv variant="complexity-easy"> </StyledDiv>
								) : (
									''
								)}
								{todo.complexity === 'middle' ? (
									<StyledDiv variant="complexity-middle"> </StyledDiv>
								) : (
									''
								)}
								{todo.complexity === 'hard' ? (
									<StyledDiv variant="complexity-hard"> </StyledDiv>
								) : (
									''
								)}
							</StyledList>
						);
					})}
				</StyledUL>
			</StyledDiv>
		</StyledSection>
	) : (
		''
	);
}
