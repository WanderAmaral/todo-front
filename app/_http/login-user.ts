export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao fazer login.");
    }

    const data = await response.json();

    localStorage.setItem("authToken", data.token);

    return data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
};
