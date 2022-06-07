import StyledSectionCard from '../styled-components/StyledSectionCard';
import StyledInput from '../styled-components/StyledInput';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledDiv from '../styled-components/StyledDiv';
import StyledDivComplex from '../styled-components/StyledDivComplex';
import StyledSectionCardRaw from '../styled-components/StyledSectionCardRaw';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import StyledImage from '../styled-components/StyledImage';
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
						const todoIndex = feature.todo.findIndex(
							todoIndex => todoIndex.id === todo.id
						);

						return (
							<StyledSectionCardRaw key={todo.id} variant="todolist">
								<StyledList
									variant="todolist-small"
									style={{
										background:
											project.color === 'blue'
												? 'var(--blue-button)'
												: project.color === 'purple'
												? 'var(--purple-button)'
												: project.color === 'yellow'
												? 'var(--yellow-button)'
												: project.color === 'red'
												? 'var(--red-button)'
												: project.color === 'green'
												? 'var(--green-button)'
												: project.color === 'grey'
												? 'var(--grey-button)'
												: '',
									}}
								>
									<input
										id="todocheck"
										name="todocheck"
										type="checkbox"
										checked={todo.isChecked}
										onChange={() => {
											checkTodo(projectIndex, featureIndex, todoIndex);
										}}
									/>
									<StyledDiv variant="open-todonote">{todo.name}</StyledDiv>
									<StyledDiv variant="notesicon">
										<StyledImage
											src="/notes.svg"
											alt="notes"
											width={18}
											height={18}
											onClick={() => {
												toggleNote(projectIndex, featureIndex, todoIndex);
											}}
										/>
									</StyledDiv>
									{todo.complexity === 'easy' ? (
										<StyledDivComplex variant="complexity-easy">
											{' '}
										</StyledDivComplex>
									) : (
										''
									)}
									{todo.complexity === 'middle' ? (
										<StyledDivComplex variant="complexity-middle">
											{' '}
										</StyledDivComplex>
									) : (
										''
									)}
									{todo.complexity === 'hard' ? (
										<StyledDivComplex variant="complexity-hard">
											{' '}
										</StyledDivComplex>
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
							</StyledSectionCardRaw>
						);
					})}
				</StyledUL>
			</StyledSectionCardRaw>
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
		</StyledSectionCard>
	);
}
