export const SAVE_DATA_PROFILE = 'SAVE_DATA_PROFILE';
export const CLEAR_DATA_USER_PROFILE = 'CLEAR_DATA_USER_PROFILE';

export const  saveDataProfile = (data) => {
    return { type: SAVE_DATA_PROFILE, payload: data};
}
export const clearDataUserProfile = () => {
    return { type: CLEAR_DATA_USER_PROFILE, payload: ''};
}