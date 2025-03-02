export const createLogin = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch("http://localhost:3333/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao criar conta");
    }

    return await response.json(); // Sucesso
  } catch (error) {
    console.log(error);
  }
};
