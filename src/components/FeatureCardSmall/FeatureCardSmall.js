import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledButton from '../styled-components/StyledButton';
import StyledParagraph from '../styled-components/StyledParagraph';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import StyledInput from '../styled-components/StyledInput';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function FeatureCardSmall({ feature, index }) {
	const openNote = useStore(state => state.openNote);
	const checkTodo = useStore(state => state.checkTodo);
	const projectszustand = useStore(state => state.projectszustand);
	const deleteFeature = useStore(state => state.deleteFeature);
	const closeFeatureView = useStore(state => state.closeFeatureView);
	const selectFeature = useStore(state => state.selectFeature);
	const stateToAddTodo = useStore(state => state.stateToAddTodo);
	const stateToEditFeature = useStore(state => state.stateToEditFeature);

	return feature.selected ? (
		<>
			<StyledSection variant="big-grey">
				<div
					onClick={() => {
						stateToEditFeature();
					}}
				>
					<MySVG
						variant="edit"
						position="absolute"
						size="2.6rem"
						top="1.8rem"
						right="6rem"
					/>
				</div>
				<div
					onClick={() => {
						closeFeatureView(0, 1);
					}}
				>
					<MySVG
						variant="cancel"
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
					<p>Startdatum - Enddatum</p>
				</StyledDiv>
				<StyledSectionRaw variant="overflow">
					<StyledUL variant="list-in-card">
						{projectszustand.map(project => {
							project.feature.map(feature => {
								feature.todo.map(todo => {
									const index = feature.todo.findIndex(
										todoIndex => todoIndex.id === todo.id
									);

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
													onChange={() => checkTodo(index)}
												/>
												<StyledDiv
													variant="open-todonote"
													onClick={() => {
														openNote(index);
													}}
												>
													{todo.name}
												</StyledDiv>
												{todo.complexity === 'easy' ? (
													<StyledDiv variant="complexity-easy">
														{' '}
													</StyledDiv>
												) : (
													''
												)}
												{todo.complexity === 'middle' ? (
													<StyledDiv variant="complexity-middle">
														{' '}
													</StyledDiv>
												) : (
													''
												)}
												{todo.complexity === 'hard' ? (
													<StyledDiv variant="complexity-hard">
														{' '}
													</StyledDiv>
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
								});
							});
						})}
					</StyledUL>
				</StyledSectionRaw>
			</StyledSection>
			<StyledButton
				variant="mainbutton"
				type="button"
				onClick={() => {
					stateToAddTodo();
				}}
			>
				Todo hinzufügen
			</StyledButton>
		</>
	) : (
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
						selectFeature(0, 1);
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
