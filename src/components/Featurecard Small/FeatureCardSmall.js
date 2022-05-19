import StyledSection from '../styled-components/StyledSection';
import StyledDiv from '../styled-components/StyledDiv';
import StyledUL from '../styled-components/StyledUL';
import StyledList from '../styled-components/StyledList';
import StyledInput from '../styled-components/StyledInput';
import Typography from '../styled-components/Typography';
import todos from '../../services/static-todos.json';

export default function FeatureCardSmall() {
	return (
		<StyledSection variant="small-grey">
			<StyledDiv variant="cardtitle">
				<StyledInput
					variant="featurecheckbox"
					id="featurecheckbox"
					name="featurecheckbox"
					type="checkbox"
				/>
				<Typography variant="h3" component="h3" size="1.6rem">
					Featurename
				</Typography>
				<StyledDiv variant="statusbox">
					<Typography variant="p">Status</Typography>
				</StyledDiv>
			</StyledDiv>
			<StyledUL variant="list-in-card">
				{todos.slice(0, 3).map(todo => {
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
