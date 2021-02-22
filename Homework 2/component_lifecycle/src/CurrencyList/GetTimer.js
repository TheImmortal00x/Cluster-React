import {useEffect} from "react";

export const GetTimer = ({fetchData}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchData();
        }, 5000);

        return () => clearTimeout(timer);
    });

    return null;
};