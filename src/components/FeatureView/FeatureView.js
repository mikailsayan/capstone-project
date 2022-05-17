import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledInput from '../styled-components/StyledInput';
import StyledList from '../styled-components/StyledList';
import StyledUL from '../styled-components/StyledUL';
import StyledButton from '../styled-components/StyledButton';
import features from '../../services/static-features.json';
import todos from '../../services/static-todos.json';
import MySVG from '../MySVG';

export default function FeatureView() {
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
					<h2>Featurename</h2>
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
				<StyledUL variant="list-in-card">
					{todos.map(todo => {
						return (
							<StyledList key={todo.id} variant="todolist-small">
								<input id="todocheck" name="todocheck" type="checkbox" />
								{todo.name}
								<StyledDiv variant="complexity"> </StyledDiv>
							</StyledList>
						);
					})}
				</StyledUL>
			</StyledSection>
			<StyledButton variant="mainbutton" type="button">
				Todo hinzufügen
			</StyledButton>
		</>
	);
}
