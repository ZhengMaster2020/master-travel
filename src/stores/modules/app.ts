import { defineStore } from 'pinia'
import { store } from '../index'

interface AppState {
    totalCount: number,
    pageLoading: boolean
}

export const useAppSotre = defineStore({
    id: 'app',
    state: ():AppState => ({
       pageLoading: false,
       totalCount: 0 
    }),
    getters: {
        getTotalCount: state => state.totalCount * 2,
				getPageLoading(): boolean {
					return this.pageLoading
				}
    },
    actions: {
        setTotalCount(num: number): void {
					this.totalCount += num
        }
    }

})


export  const useAppStoreWithOut = () => useAppSotre(store)