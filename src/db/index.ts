import { PreferenceType } from '../types/PreferenceType'
import { Priority } from '../types/Priority'
import { Status } from '../types/Status'
import User from '../types/User'

export const db: User[] = [
  {
    id: '123',
    username: 'benjamin',
    password: 'benjamin',
    firstName: 'Benjamin',
    lastName: 'Stafford',
    tasks: [
      {
        id: '043590',
        title: 'yeet',
        category: 'this crab',
        description: 'help',
        important: false,
        comments: [],
        priority: Priority.LOW,
        status: Status.IN_PROGRESS,
        createdOn: Date.now(),
        dueOn: Date.now()
      },
      {
        id: '1414',
        title: 'sdfa',
        category: 'thasfsb',
        description: 'asdfaf',
        important: false,
        comments: [
          {
            id: '3999999',
            user: 'username',
            text: 'asdfjaljksd;ajskdf;klajsdf',
            createdOn: Date.now()
          }
        ],
        priority: Priority.LOW,
        status: Status.IN_PROGRESS,
        createdOn: Date.now(),
        dueOn: Date.now()
      }
    ],
    preferences: [
      {
        type: PreferenceType.EMAIL,
        value: 'b.stafford2017@gmail.com'
      },
      {
        type: PreferenceType.PHONE_NUMBER,
        value: '507-283-1928'
      }
    ]
  },
  {
    id: '2345',
    username: 'res',
    password: 'res',
    firstName: 'Res',
    lastName: 'Ford',
    tasks: [
      {
        id: '123',
        title: 'testing',
        category: 'going deep',
        description: 'more info',
        important: true,
        comments: [
          {
            id: '12342234',
            user: 'username',
            text: 'ksajf;lasdfaslkdjklsajdfa',
            createdOn: Date.now()
          }
        ],
        priority: Priority.HIGH,
        status: Status.COMPLETE,
        createdOn: Date.now(),
        dueOn: Date.now()
      }
    ],
    preferences: [
      {
        type: PreferenceType.EMAIL,
        value: 'b.stafford2017@gmail.com'
      },
      {
        type: PreferenceType.PHONE_NUMBER,
        value: '507-283-1928'
      }
    ]
  }
]
