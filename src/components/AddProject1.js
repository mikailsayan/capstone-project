import StyledSection from './styled-components/StyledSection';
import StyledForm from './styled-components/StyledForm';
import StyledLabel from './styled-components/StyledLabel';
import StyledInput from './styled-components/StyledInput';
import StyledTextarea from './styled-components/StyledTextarea';
import StyledDiv from './styled-components/StyledDiv';
import StyledImage from './styled-components/StyledImage';
import StyledButton from './styled-components/StyledButton';

export default function AddProject1() {
	return (
		<>
			<StyledSection variant="big-grey">
				<article>
					<StyledForm>
						<StyledLabel variant="toplabel" htmlFor="projectname">
							Projektname
						</StyledLabel>
						<StyledInput
							required
							variant="full"
							id="projectname"
							name="projectname"
							type="text"
						/>
						<StyledLabel variant="default" htmlFor="notes">
							Notizen
						</StyledLabel>
						<StyledTextarea required id="notes" name="notes" rows="5" cols="33" />
						<StyledLabel variant="default" htmlFor="begindate">
							Startdatum:
						</StyledLabel>
						<StyledDiv variant="center">
							<StyledInput
								variant="date"
								id="begindate"
								name="begindate"
								type="date"
							/>
							<StyledImage
								variant="calender"
								src="/calender.svg"
								alt="calender-svg"
								width={29}
								height={29}
							/>
						</StyledDiv>
						<StyledLabel variant="default" htmlFor="enddate">
							Enddatum:
						</StyledLabel>
						<StyledDiv variant="center">
							<StyledInput variant="date" id="enddate" name="enddate" type="date" />
							<StyledImage
								variant="calender"
								src="/calender.svg"
								alt="calender-svg"
								width={29}
								height={29}
							/>
						</StyledDiv>
					</StyledForm>
				</article>
			</StyledSection>
			<StyledButton variant="mainbutton" type="submit">
				Nächster Schritt
			</StyledButton>
		</>
	);
}
