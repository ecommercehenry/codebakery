export const SAVE_TOKEN = "SAVE_TOKEN";

export const saveToken = (token, email) => {
  console.log("actions", token, email)
  return {
    type: SAVE_TOKEN,
    payload: {
      token,
      email,
    },
  };
};
