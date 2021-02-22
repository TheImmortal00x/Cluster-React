import {useEffect} from "react";

export function User({idData, fetchDefault}) {
    useEffect(() => fetchDefault(), []);

    const getTitle = () => <h2>{idData.firstName + ' ' + idData.lastName}</h2>;

    const getSex = () => idData.sex ?
        <div>Sex:
            {idData.sex === 'male' ? ' чол' : ' жін'}
        </div> : null;

    const getPhones = () => idData.phones ? idData.phones.map(item =>
        <div>{item.type}: {item.number}</div>) : null;

    const showCard = () => idData ?
        <div>
            <span>{getTitle()}{getSex()}{getPhones()}</span>
        </div> : null;

    return (<>
        {showCard()}
    </>);
}