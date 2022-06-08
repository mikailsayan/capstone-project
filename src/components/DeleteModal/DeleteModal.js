//import Modal from 'react-modal';
import useStore from '../../hooks/useStore';

import StyledArticle from '../styled-components/StyledArticle';

export default function DeleteModal() {
	//const modalState = useStore(state => state.modalState);
	const setModalState = useStore(state => state.setModalState);

	return (
		<section>
			<StyledArticle variant="deletemodal">
				<div>
					<h2>Möchtest du das wirklich löschen?</h2>
				</div>
				<div>
					<button type="button">Löschen</button>
					<button
						type="button"
						onClick={() => {
							setModalState();
						}}
					>
						Abbrechen
					</button>
				</div>
			</StyledArticle>
		</section>
	);
}
