import axios from "axios";
import {AxiosResponse}  from "axios";

const CLIENT_AUTH = "gNJ1KBYf5fmGOR1m0GmchPGUBuNjy7L_vr0plP7YX-M";

axios.defaults.baseURL = "https://api.unsplash.com/search";


type ImageResultItem = {
    total: number
    total_pages: number
    results: []
}

export const fetchPhoto = async (currentPage:number, per_page:number, photo:string) => {
  const response: AxiosResponse<ImageResultItem> = await axios.get(
    `/photos?client_id=${CLIENT_AUTH}&page=${currentPage}&per_page=${per_page}&query=${photo}`
  );
  return response.data;
};