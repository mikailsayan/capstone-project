import Modal from 'react-modal';
import useStore from '../../hooks/useStore';

export default function DeleteModal() {
	const modalState = useStore(state => state.modalState);
	//const setModalState = useStore(state => state.setModalState);

	return (
		modalState === 'modal' && (
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Modal body text goes here.</p>
				</Modal.Body>

				<Modal.Footer>
					<button type="button">Close</button>
					<button type="button">Save changes</button>
				</Modal.Footer>
			</Modal.Dialog>
		)
	);
}
