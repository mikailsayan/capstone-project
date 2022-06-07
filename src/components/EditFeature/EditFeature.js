import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledDivComplex from '../styled-components/StyledDivComplex';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';
import styled from 'styled-components';
import EditTodo from '../EditTodo/EditTodo';

export default function EditFeature({ project, feature, projectIndex, featureIndex }) {
	const toggleEdit = useStore(state => state.toggleEdit);
	const saveFeatureName = useStore(state => state.saveFeatureName);
	const saveFeatureBeginDate = useStore(state => state.saveFeatureBeginDate);
	const saveFeatureEndDate = useStore(state => state.saveFeatureEndDate);
	const toggleEditTodo = useStore(state => state.toggleEditTodo);

	return feature.edit ? (
		feature.todo.edit ? (
			<EditTodo
				feature={feature}
				featureIndex={featureIndex}
				projectIndex={projectIndex}
				todoID={feature.todo.id}
			/>
		) : (
			<StyledSectionCard
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

				<StyledLabel variant="default" htmlFor="date">
					Zeitraum
				</StyledLabel>
				<StyledDiv variant="date">
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
					<p>-</p>
					<StyledInput
						variant="date"
						id="enddate"
						name="enddate"
						type="date"
						value={feature.end}
						onChange={event => {
							saveFeatureEndDate(projectIndex, featureIndex, event.target.value);
						}}
					/>
				</StyledDiv>
				<StyledDiv variant="overflow">
					<StyledUL variant="list-in-card">
						{feature.todo.map(todo => {
							const todoIndex = feature.todo.findIndex(
								todoIndex => todoIndex.id === todo.id
							);
							return (
								<StyledList key={todo.id} variant="todo-edit-feature">
									<div
										onClick={() => {
											toggleEditTodo(projectIndex, featureIndex, todoIndex);
											console.log(todo.edit);
										}}
									>
										<MySVG
											variant="edit"
											position="absolute"
											size="2.3rem"
											left="1rem"
											top="0.8rem"
										/>
									</div>
									{todo.name}
									{todo.complexity === 'easy' ? (
										<StyledDivComplex variant="complexity-easy">
											{' '}
										</StyledDivComplex>
									) : todo.complexity === 'middle' ? (
										<StyledDivComplex variant="complexity-middle">
											{' '}
										</StyledDivComplex>
									) : todo.complexity === 'hard' ? (
										<StyledDivComplex variant="complexity-hard">
											{' '}
										</StyledDivComplex>
									) : (
										''
									)}
								</StyledList>
							);
						})}
					</StyledUL>
				</StyledDiv>
			</StyledSectionCard>
		)
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
