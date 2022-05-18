import StyledSection from '../styled-components/StyledSection';
import StyledSectionRaw from '../styled-components/StyledSectionRaw';
import StyledDiv from '../styled-components/StyledDiv';
import StyledInput from '../styled-components/StyledInput';
import StyledList from '../styled-components/StyledList';
import StyledUL from '../styled-components/StyledUL';
import StyledButton from '../styled-components/StyledButton';
import features from '../../services/static-features.json';
//import todos from '../../services/static-todos.json';
import useStore from '../../hooks/useStore';
import MySVG from '../MySVG';

export default function FeatureView() {
	const openNote = useStore(state => state.openNote);
	const todoszustand = useStore(state => state.todoszustand);
	const featureszustand = useStore(state => state.featureszustand);

	return (
		<>
			<StyledSection variant="big-grey">
				<MySVG
					variant="edit"
					position="absolute"
					size="2.6rem"
					top="-3.5rem"
					right="4rem"
				/>
				<MySVG
					variant="cancel"
					position="absolute"
					size="2.6rem"
					top="-3.5rem"
					right="0.5rem"
				/>
				<StyledDiv variant="cardtitle">
					<StyledInput
						variant="featurecheckbox"
						id="featurecheckbox"
						name="featurecheckbox"
						type="checkbox"
					/>
					<h2>{featureszustand[0].name}</h2>
					<StyledDiv variant="statusbox">
						<p>Status</p>
					</StyledDiv>
				</StyledDiv>
				<StyledDiv variant="cardtitle">
					<MySVG variant="calender" size="1.3rem" />
					<p>
						{features[0].begin} - {features[0].end}
					</p>
				</StyledDiv>
				<StyledSectionRaw variant="overflow">
					<StyledUL variant="list-in-card">
						{todoszustand.map(todo => {
							const index = todoszustand.findIndex(
								todoIndex => todoIndex.id === todo.id
							);

							return (
								<section key={todo.id}>
									<StyledList
										variant="todolist-small"
										onClick={() => {
											openNote(index);
										}}
									>
										<input id="todocheck" name="todocheck" type="checkbox" />
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
									{todo.isOpen ? (
										<StyledDiv variant="todonotes">{todo.note}</StyledDiv>
									) : (
										''
									)}
								</section>
							);
						})}
					</StyledUL>
				</StyledSectionRaw>
			</StyledSection>
			<StyledButton variant="mainbutton" type="button">
				Todo hinzufügen
			</StyledButton>
		</>
	);
}
