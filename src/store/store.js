
/*
Unless you are required to use the MVC - Model View Controller setup
which is typically used in apps that have the backed + frontend clesely tied and deployed together:
like express handling api routes, and rendering the ui - or serving a react app
*/
//! github.com/pmndrs/zustand
import createStore from 'zustand'

// we create a react-hook that we can use inside of any component
const useStore = createStore((set) => ({
    // this is our store - datastore
    // we can subscribe to it to listen for changes - without needing to wrap components in context providers
    totalVehicles: 0,
    vehicleList: [],
    totalAccounts: 0, //          v Set function included with zustand
    //                            |     v The current state of the store
    //                            |     |       v Provide a new store (object) with the updated values only (totalVehicels in this case)
    setTotalVehicles: (number) => set(state => ({ totalVehicles: number })),



    get_all_vehicle_info_from_api: async () => {
        let response = await axios.get('our-api/all-vehicles')

        set(state => ({ vehicleList: response.data }))
    }
}))

export default useStore

