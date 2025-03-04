export const deleteTask = async (taskId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3333/delete-task/${taskId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao deletar task");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar task:", error);
    return null;
  }
};
