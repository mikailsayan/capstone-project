import StyledSection from '../styled-components/StyledSection';
import StyledInput from '../styled-components/StyledInput';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledDiv from '../styled-components/StyledDiv';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import EditFeatureProject from '../EditFeatureProject/EditFeatureProject';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function FeatureCardBig({ projectIndex, featureIndex, feature }) {
	const stateToAddTodo = useStore(state => state.stateToAddTodo);
	const closeFeatureView = useStore(state => state.closeFeatureView);
	const checkTodo = useStore(state => state.checkTodo);
	const openNote = useStore(state => state.openNote);
	const editFeature = useStore(state => state.editFeature);

	return feature.edit ? (
		<EditFeatureProject
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
		/>
	) : (
		<StyledSection variant="big-grey">
			<div
				onClick={() => {
					editFeature(projectIndex, featureIndex);
				}}
			>
				<MySVG
					variant="edit"
					position="absolute"
					size="2.6rem"
					top="1.8rem"
					right="9.5rem"
				/>
			</div>
			<div
				onClick={() => {
					stateToAddTodo();
				}}
			>
				<MySVG
					variant="addtodo"
					position="absolute"
					size="2.6rem"
					top="1.8rem"
					right="6rem"
				/>
			</div>
			<div
				onClick={() => {
					closeFeatureView(projectIndex, featureIndex);
				}}
			>
				<MySVG
					variant="back"
					position="absolute"
					size="2.6rem"
					top="1.8rem"
					right="2.5rem"
				/>
			</div>
			<StyledDiv variant="cardtitle">
				<StyledInput
					variant="featurecheckbox"
					id="featurecheckbox"
					name="featurecheckbox"
					type="checkbox"
				/>
				<Typography variant="h3" component="h3" size="1.7rem">
					{feature.selected && feature.name}
				</Typography>
			</StyledDiv>
			<StyledDiv variant="cardtitle">
				<MySVG variant="calender" size="1.3rem" />
				<p>
					{feature.selected && feature.begin} - {feature.selected && feature.end}
				</p>
			</StyledDiv>
			<StyledSectionRaw variant="overflow-todolist">
				<StyledUL variant="list-in-card">
					{feature.todo.map(todo => {
						const index = feature.todo.findIndex(todoIndex => todoIndex.id === todo.id);

						return (
							<section key={todo.id}>
								<StyledList
									variant="todolist-small"
									style={{
										border: todo.isChecked && '2px solid #5EDC5C',
									}}
								>
									<input
										id="todocheck"
										name="todocheck"
										type="checkbox"
										checked={todo.isChecked}
										onChange={() => {
											checkTodo(projectIndex, featureIndex, index);
										}}
									/>
									<StyledDiv
										variant="open-todonote"
										onClick={() => {
											openNote(projectIndex, featureIndex, index);
										}}
									>
										{todo.name}
									</StyledDiv>
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
								{todo.isOpen ? (
									<StyledDiv variant="todonotes">
										<StyledParagraph variant="todo-notes">
											{todo.note}
										</StyledParagraph>
									</StyledDiv>
								) : (
									''
								)}
							</section>
						);
					})}
				</StyledUL>
			</StyledSectionRaw>
		</StyledSection>
	);
}
