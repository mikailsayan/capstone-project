import StyledSection from '../styled-components/StyledSection';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';
import styled from 'styled-components';

export default function EditFeature({ project, feature, projectIndex, featureIndex }) {
	const toggleEdit = useStore(state => state.toggleEdit);
	const saveFeatureName = useStore(state => state.saveFeatureName);
	const saveFeatureBeginDate = useStore(state => state.saveFeatureBeginDate);
	const controlFeatureEndDate = useStore(state => state.controlFeatureEndDate);

	return feature.edit ? (
		<StyledSection
			variant="big-grey"
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
			<StyledSaveButton
				onClick={() => {
					toggleEdit(projectIndex, featureIndex);
				}}
			>
				<MySVG variant="save2" color="var(--save-icon)" size="2.6rem" />
			</StyledSaveButton>

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
					saveFeatureName(projectIndex, featureIndex, event.target.value);
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
						saveFeatureBeginDate(projectIndex, featureIndex, event.target.value);
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
						controlFeatureEndDate(projectIndex, featureIndex, event.target.value);
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

const StyledSaveButton = styled.button`
	position: absolute;
	top: 1.8rem;
	right: 2.5rem;
	border: none;
	background: transparent;
`;
