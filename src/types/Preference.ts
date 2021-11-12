import { PreferenceType } from './PreferenceType'

export default interface Preference {
  type: PreferenceType
  value: string
}
