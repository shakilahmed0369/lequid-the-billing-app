import moment from "moment"

export default function useHelper() {

    const formatDate = (date) => {
        return Date(date).toLocaleString();
    }

    return {
        formatDate,
    }
}