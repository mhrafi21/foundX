import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPosts = async () => {
    const res = await fetch(`${envConfig.baseApi}/items?limit=1&sortBy=-createAt`)
    delay();
    return res.json();
  
}



