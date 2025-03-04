export const createUserTask = async (title: string, token: string) => {
  try {
    const response = await fetch("http://localhost:3333/create-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar task");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao criar task:", error);
    return null;
  }
};
