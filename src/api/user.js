import { BASE_API } from "../utils/constans";

export async function loginApi(formValue) {
  try {
    const url = `${BASE_API}/api/auth/login/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    };
    const response = await fetch(url, params);
    if (response.status !== 200) {
      throw new Error("Usuario o Contraseña Incorrectos");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
