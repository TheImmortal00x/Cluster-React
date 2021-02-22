import React, {useState, useEffect} from "react";
export const View = ({data, ready}) => {
    const [buyRate, setBuyRate] = useState({value: 0, trend: 0});
    const [sellRate, setSellRate] = useState({value: 0, trend: 0});
    const trend = (value) => value ? <>&#8679;</> : <>&#8681;</>;

    useEffect(_ => {
        if (data.rateBuy) {
            setBuyRate({
                value: data.rateBuy,
                trend: buyRate.value < data.rateBuy
            });
        }

        if (data.rateBuy) {
            setSellRate({
                value: data.rateSell,
                trend: sellRate.value < data.rateSell
            });
        }

    }, [data]);

    return (
        <>
            <span>Currency: {ready ? (data.name) : null}</span><br/>
            <span>Rate purchase: {ready ? data.rateBuy : null} {buyRate.value > 0 && trend(buyRate.trend)}</span><br/>
            <span>RateSell: {ready ? data.rateSell : null} {sellRate.value > 0 && trend(sellRate.trend)}</span>
        </>
    );
};