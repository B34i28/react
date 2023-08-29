import Avatar from "./components/Avatar"
import Button from "./components/Button"
import Gallery from "./components/Gallery"
import { Profile } from "./components/Gallery"
import List from "./components/List"
import PackingList from "./components/PackingList"
import Profileprop from "./components/Profileprop"
import ToDo from "./components/ToDo"
import TodoList from "./components/ToDoList"
import Today from "./components/Today"
import Toolbar from "./components/Toolbar"
import Toolbar1 from "./components/Toolbar1"

export default function Home(){
  return(
      <div >
      {/* <Gallery/>
      <Profile />
      <ToDo />
      <Avatar/>
      <TodoList/>
      <Today /> */}
      {/* <Profileprop person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={200}/> */}
      {/* <PackingList/> */}
      {/* <List/> */}
      <Button/>
      <Toolbar/>
      <Toolbar1/>
      </div>
  )
}
