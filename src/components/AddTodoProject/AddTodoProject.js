import StyledForm from '../styled-components/StyledForm';
import StyledSection from '../styled-components/StyledSection';
import StyledButton from '../styled-components/StyledButton';
import StyledLabel from '../styled-components/StyledLabel';
import StyledInput from '../styled-components/StyledInput';
import StyledTextarea from '../styled-components/StyledTextarea';
import StyledArticle from '../styled-components/StyledArticle';
import StyledDiv from '../styled-components/StyledDiv';

export default function AddTodoProject() {
	return (
		<StyledForm>
			<StyledSection variant="big-grey">
				<StyledLabel variant="default" htmlFor="todoname">
					Todoname
				</StyledLabel>
				<StyledInput required variant="full" id="todoname" name="todoname" type="text" />
				<StyledArticle variant="flexcenter">
					<StyledTextarea variant="addtodonote" />
				</StyledArticle>
				<StyledLabel variant="default" htmlFor="complexity">
					Schwierigkeit
				</StyledLabel>
				<StyledArticle variant="flexcenter">
					<StyledDiv variant="green-complex"> </StyledDiv>
					<StyledDiv variant="yellow-complex"> </StyledDiv>
					<StyledDiv variant="red-complex"> </StyledDiv>
				</StyledArticle>
			</StyledSection>
			<StyledButton variant="donebutton" type="submit">
				Speichern
			</StyledButton>
		</StyledForm>
	);
}
