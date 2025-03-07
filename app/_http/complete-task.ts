export const completeTask = async (taskId: string, completed: boolean) => {
  try {
    const response = await fetch(
      `http://localhost:3333/complete-task/${taskId}`,
      {
        method: "PATCH",
        body: JSON.stringify({ completed }),
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao deletar task");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
