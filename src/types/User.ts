import Preference from './Preference'
import Task from './task'

export default interface User {
  id: string
  username: string
  password: string
  firstName: string
  lastName: string
  tasks: Task[]
  preferences: Preference[]
}
