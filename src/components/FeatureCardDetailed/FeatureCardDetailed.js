import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledInput from '../styled-components/StyledInput';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledDiv from '../styled-components/StyledDiv';
import StyledSectionCardRaw from '../styled-components/StyledSectionCardRaw';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import EditFeature from '../EditFeature/EditFeature';
import AddTodo from '../AddTodo/AddTodo';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function FeatureCardDetailed({ project, feature, projectIndex, featureIndex }) {
	const closeFeatureCardDetailed = useStore(state => state.closeFeatureCardDetailed);
	const checkTodo = useStore(state => state.checkTodo);
	const toggleNote = useStore(state => state.toggleNote);
	const toggleEdit = useStore(state => state.toggleEdit);
	const toggleAddTodo = useStore(state => state.toggleAddTodo);

	return feature.edit ? (
		<EditFeature
			project={project}
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
		/>
	) : feature.addtodo ? (
		<AddTodo
			project={project}
			feature={feature}
			featureIndex={featureIndex}
			projectIndex={projectIndex}
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
			<div
				onClick={() => {
					toggleEdit(projectIndex, featureIndex);
				}}
			>
				<MySVG variant="edit" position="absolute" size="2.6rem" top="1.8rem" right="6rem" />
			</div>
			<div
				onClick={() => {
					closeFeatureCardDetailed(projectIndex, featureIndex);
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
			<StyledSectionCardRaw variant="overflow-todolist">
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
											toggleNote(projectIndex, featureIndex, index);
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
					<StyledList variant="addtodo">
						<StyledDiv
							variant="center"
							onClick={() => {
								toggleAddTodo(projectIndex, featureIndex);
							}}
						>
							<MySVG variant="addtodo" size="3rem" />
						</StyledDiv>
					</StyledList>
				</StyledUL>
			</StyledSectionCardRaw>
		</StyledSectionCard>
	);
}
