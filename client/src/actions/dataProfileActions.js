export const SAVE_DATA_PROFILE = 'SAVE_DATA_PROFILE';

export const  saveDataProfile = (data) => {
    return { type: SAVE_DATA_PROFILE, payload: data};
}