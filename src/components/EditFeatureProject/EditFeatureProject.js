import StyledSection from '../styled-components/StyledSection';
import StyledForm from '../styled-components/StyledForm';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledDiv from '../styled-components/StyledDiv';
import StyledButton from '../styled-components/StyledButton';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import Typography from '../styled-components/Typography';
import MySVG from '../MySVG';
import useStore from '../../hooks/useStore';

export default function EditFeatureProject() {
	const projectszustand = useStore(state => state.projectszustand);
	const appState = useStore(state => state.appState);
	const stateToFeatureList = useStore(state => state.stateToFeatureList);

	return (
		appState === 'editfeature' && (
			<StyledForm
				onSubmit={event => {
					event.preventDefault();
				}}
			>
				<StyledSection variant="big-grey">
					<Typography variant="h2" component="h2">
						Projektname
					</Typography>
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

					<StyledLabel variant="default" htmlFor="featurename">
						Featurename
					</StyledLabel>
					<StyledInput
						required
						variant="full"
						id="featurename"
						name="featurename"
						type="text"
					/>
					<StyledLabel variant="default" htmlFor="begindate">
						Startdatum:
					</StyledLabel>
					<StyledDiv variant="center">
						<StyledInput variant="date" id="begindate" name="begindate" type="date" />
						<MySVG variant="calender" size="2.9rem" />
					</StyledDiv>
					<StyledLabel variant="default" htmlFor="enddate">
						Enddatum:
					</StyledLabel>
					<StyledDiv variant="center">
						<StyledInput variant="date" id="enddate" name="enddate" type="date" />
						<MySVG variant="calender" size="2.9rem" />
					</StyledDiv>
					<StyledDiv variant="overflow">
						<StyledUL variant="list-in-card">
							{projectszustand.map(project => {
								return project.feature.map(feature => {
									return feature.todo.map(todo => {
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
										);
									});
								});
							})}
						</StyledUL>
					</StyledDiv>
				</StyledSection>
				<StyledButton variant="donebutton" type="submit">
					Speichern
				</StyledButton>
			</StyledForm>
		)
	);
}
