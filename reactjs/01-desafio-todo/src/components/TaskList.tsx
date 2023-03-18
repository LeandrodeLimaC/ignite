import { Task } from "./Task";

export function TaskList() {
  return (
    <div>
      <div>
        <p>Tarefas criadas <div>5</div></p>
        <p>Concluídas <div>2 de 5</div></p>
      </div>

      <div>
        <Task />
        <Task />
      </div>
    </div>
  )
}