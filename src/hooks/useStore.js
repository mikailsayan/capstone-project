import create from 'zustand';

const useStore = create(set => {
	return {
		//Add Project Step 1-3
		isActive: true,
		step: 1,
		maxStep: 3,
		formAnswers: {},
		nextStep: () => {
			set(state => {
				if (state.step < state.maxStep) {
					return { step: state.step + 1 };
				}
			});
		},
		endFormFunction: () => {
			set({ isActive: false });
		},
	};
});

export default useStore;
