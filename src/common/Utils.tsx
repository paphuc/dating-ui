import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
export function clearLocalStorage() {
  ;['user','token_device'].forEach((item) => {
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
export function getThumbnailLink(
  url: string,
  size: 'tiny' | 'small' | 'medium' | 'large' = 'small'
): string {
  const Res = {
    tiny: {
      h: 160,
      w: 90,
    },
    small: {
      h: 320,
      w: 180,
    },
    medium: {
      h: 640,
      w: 360,
    },
    large: {
      h: 960,
      w: 540,
    },
  }
  return url.replace(
    '/upload/',
    `/upload/c_fit,h_${Res[size].h},w_${Res[size].w}/`
  )
}
