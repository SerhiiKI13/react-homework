import {useEffect, useState} from "react";
import {serviceApi} from "../service/service.api.ts";

export const useFetch = <T> (url: string) => {
    const [items, setItems] = useState<T[]>([]);
    useEffect(() => {
        serviceApi<T>(url).then(response => setItems(response));
    }, []);
    return items;
}