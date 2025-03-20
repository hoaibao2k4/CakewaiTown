import axios from "axios";
import { response } from "~/services/axios";

export const getBlogs = async () => {
    try {
        const res = await response.get('/api/public/event_blog')
        return res.data
    }
    catch(err : unknown) {
        if (axios.isAxiosError(err)) {
            console.error(
                err.response?.data || err.message,
                err.response?.status || "No status"
            )
        }
        else if (err instanceof Error) 
            console.error("Request err: ", err.message)
        else
        console.log("Unknown: ", err)
    }
}