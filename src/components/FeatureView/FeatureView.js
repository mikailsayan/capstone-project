import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledInput from '../styled-components/StyledInput';
import StyledImage from '../styled-components/StyledImage';
import StyledList from '../styled-components/StyledList';
import StyledUL from '../styled-components/StyledUL';
import StyledButton from '../styled-components/StyledButton';
import features from '../../services/static-features.json';
import todos from '../../services/static-todos.json';

export default function FeatureView() {
	return (
		<>
			<StyledSection variant="big-grey">
				<StyledImage
					variant="right-top"
					src="/cancel.svg"
					alt="cancel-icon"
					width={26}
					height={26}
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
					<StyledImage src="/calender.svg" alt="calender-icon" width={13} height={13} />
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
