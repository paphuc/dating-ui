import AsyncStorage from "@react-native-async-storage/async-storage"

export function clearLocalStorage() {
	["user"].forEach((item) => {
		AsyncStorage.removeItem(item)
	})
}

export function getToken(tokenType : string) {
	return AsyncStorage.getItem(tokenType)
}
