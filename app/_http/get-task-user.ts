export const fetchUserTasks = async () => {
    const token = localStorage.getItem("authToken"); // Pegando o token armazenado
  
    if (!token) {
      console.error("Token não encontrado");
      return null;
    }
  
    try {
      const response = await fetch("http://localhost:3333/tasks-user", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, 
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Erro ao buscar as tarefas");
      }
  
      const tasks = await response.json();
      return tasks;
    } catch (error) {
      console.error("Erro na requisição:", error);
      return null;
    }
  };
  