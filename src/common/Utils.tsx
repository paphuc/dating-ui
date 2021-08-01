import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
export function clearLocalStorage() {
  ;['user'].forEach((item) => {
    AsyncStorage.removeItem(item)
  })
}

export function getToken(tokenType: string) {
  return AsyncStorage.getItem(tokenType)
}

export function getAge(date: any): Number {
  return new Date().getFullYear() - new Date(date).getFullYear()
}
export function renderDate(date: string): string {
  const d = moment(date)
  const today = moment()
  if (!d.isSame(today, 'year')) {
    return d.format('MM-YYYY')
  } else if (!d.isSame(today, 'month')) {
    return d.format('DD-MM')
  } else if (!d.isSame(today, 'week')) {
    return d.format('DD-MM ')
  } else if (d.isSame(today, 'week') && !d.isSame(today, 'day')) {
    return d.format('ddd')
  } else {
    return d.format('hh:mm')
  }
}
