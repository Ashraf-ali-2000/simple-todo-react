import TodoLists from "./todoList";

export default function Todos({todo,todoFunc}) {

    return (<div style={{  display:"flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection:"column"}}>
    {todo.map((item) => <TodoLists key={Math.random()}  item = {item} todoFunc={todoFunc} />) }
    </div>)
}
