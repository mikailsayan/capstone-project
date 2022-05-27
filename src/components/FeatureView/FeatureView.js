import StyledSection from '../styled-components/StyledSection';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';
import StyledDiv from '../styled-components/StyledDiv';
import StyledInput from '../styled-components/StyledInput';
import StyledList from '../styled-components/StyledList';
import StyledUL from '../styled-components/StyledUL';
import StyledButton from '../styled-components/StyledButton';
import StyledParagraph from '../styled-components/StyledParagraph';
import Typography from '../styled-components/Typography';
import useStore from '../../hooks/useStore';
//import { useState, React } from 'react';s
import MySVG from '../MySVG';

export default function FeatureViewCard() {
	const openNote = useStore(state => state.openNote);
	const checkTodo = useStore(state => state.checkTodo);
	//const todoszustand = useStore(state => state.todoszustand);
	//const length = todoszustand.filter(todo => !todo.isChecked).length;
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);
	const stateToFeatureList = useStore(state => state.stateToFeatureList);
	const stateToAddTodo = useStore(state => state.stateToAddTodo);
	const stateToEditFeature = useStore(state => state.stateToEditFeature);

	return (
		appState === '' && (
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
							stateToFeatureList();
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
							Ein Featurename
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
														border:
															todo.isChecked && '2px solid #5EDC5C',
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
		)
	);
}
