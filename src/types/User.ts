import { Task } from './task'

export interface User {
  id: string
  username: string
  password: string
  firstName: string
  lastName: string
  tasks: Array<Task>
}
