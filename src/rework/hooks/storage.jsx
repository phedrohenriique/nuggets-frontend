export const storage = {
    storeData: (key, value) => {
        localStorage.setItem(key, value)
    },
    getData: (key) => {
        localStorage.getItem(key)
    },
    deleteData: (key) => {
        localStorage.removeItem(key)
    },
    clearData: () => {
        localStorage.clear()
    }
}
