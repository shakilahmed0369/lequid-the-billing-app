import axios from "axios"
import { ref } from "@vue/reactivity";

export default function useFlat() {
    // base api end point
    const base_url = import.meta.env.VITE_BASEURL
    
    const flats = ref([]);
    const flatPaidList = ref([]);

    const getFlats = async () => {
       let response = await axios.get(base_url + '/flats');
       flats.value = response.data
    }

    const getFlatPaidList = async (id) => {
       let response = await axios.get(base_url + '/flats/paidlist/' + id );
       flatPaidList.value = response.data
    }

return {
    getFlats,
    flats,
    getFlatPaidList,
    flatPaidList
}
}