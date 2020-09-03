export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";


export const openModal = (modal, jobId) => ({
    type: OPEN_MODAL,
    modal,
    jobId
});


export const closeModal = () => ({
    type: CLOSE_MODAL
});

