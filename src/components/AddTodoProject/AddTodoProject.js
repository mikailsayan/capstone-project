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
				<StyledLabel variant="toplabel" htmlFor="complexity">
					Schwierigkeit
				</StyledLabel>
				<StyledArticle variant="flexcenter">
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="easy"
						value="easy"
					/>
					<StyledLabel variant="complexity" htmlFor="easy">
						<StyledDiv variant="green-complex" />
					</StyledLabel>
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="middle"
						value="middle"
					/>
					<StyledLabel variant="complexity" htmlFor="middle">
						<StyledDiv variant="yellow-complex" />
					</StyledLabel>
					<StyledInput
						variant="complexity"
						type="radio"
						name="complexity"
						id="hard"
						value="hard"
					/>
					<StyledLabel variant="complexity" htmlFor="hard">
						<StyledDiv variant="red-complex" />
					</StyledLabel>
				</StyledArticle>
			</StyledSection>
			<StyledButton variant="donebutton" type="submit">
				Speichern
			</StyledButton>
		</StyledForm>
	);
}
