import StyledForm from '../styled-components/StyledForm';
import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledTextarea from '../styled-components/StyledTextarea';
import StyledArticle from '../styled-components/StyledArticle';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';
import StyledDivRadio from '../styled-components/StyledDivRadio';
import styled from 'styled-components';

export default function EditTodo({ feature, projectIndex, featureIndex, todoID }) {
	const saveTodoName = useStore(state => state.saveTodoName);
	const saveTodoNote = useStore(state => state.saveTodoNote);
	const saveTodoComplex = useStore(state => state.saveTodoComplex);
	const toggleEditTodo = useStore(state => state.toggleEditTodo);
	const setAppState = useStore(state => state.setAppState);
	const todoIndex = feature.todo.findIndex(todoIndex => todoIndex.id === todoID);

	return feature.todo.edit ? (
		<StyledForm
			onSubmit={event => {
				event.preventDefault();
			}}
		>
			<StyledSectionCard variant="big-grey">
				<StyledSaveButton
					onClick={() => {
						toggleEditTodo(projectIndex, featureIndex, todoIndex);
					}}
				>
					<MySVG variant="save2" color="var(--save-icon)" size="2.6rem" />
				</StyledSaveButton>
				<div
					onClick={() => {
						setAppState('featurelist');
					}}
				>
					<MySVG
						variant="cancel"
						position="absolute"
						size="2.6rem"
						top="-3.5rem"
						right="0.5rem"
					/>
				</div>
				<StyledLabel variant="default" htmlFor="todoname">
					Todoname
				</StyledLabel>
				<StyledInput
					required
					variant="full"
					id="todoname"
					name="todoname"
					type="text"
					onChange={event => {
						saveTodoName(projectIndex, featureIndex, todoIndex, event.target.value);
					}}
				/>
				<StyledArticle variant="flexcenter">
					<StyledTextarea
						variant="addtodonote"
						onChange={event => {
							saveTodoNote(projectIndex, featureIndex, todoIndex, event.target.value);
						}}
					/>
				</StyledArticle>
				<StyledLabel variant="toplabel" htmlFor="complexity">
					Schwierigkeit
				</StyledLabel>
				<StyledArticle variant="flexcenter">
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="easy"
						value="easy"
						onChange={event => {
							saveTodoComplex(
								projectIndex,
								featureIndex,
								todoIndex,
								event.target.value
							);
						}}
					/>
					<StyledLabel variant="complexity" htmlFor="easy">
						<StyledDivRadio variant="green-complex-radio" />
					</StyledLabel>
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="middle"
						value="middle"
						onChange={event => {
							saveTodoComplex(
								projectIndex,
								featureIndex,
								todoIndex,
								event.target.value
							);
						}}
					/>
					<StyledLabel variant="complexity" htmlFor="middle">
						<StyledDivRadio variant="yellow-complex-radio" />
					</StyledLabel>
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="hard"
						value="hard"
						onChange={event => {
							saveTodoComplex(
								projectIndex,
								featureIndex,
								todoIndex,
								event.target.value
							);
						}}
					/>
					<StyledLabel variant="complexity" htmlFor="hard">
						<StyledDivRadio variant="red-complex-radio" />
					</StyledLabel>
				</StyledArticle>
			</StyledSectionCard>
		</StyledForm>
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
