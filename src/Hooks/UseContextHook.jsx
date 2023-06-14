import { createContext, useContext } from 'react';
import jdata from './data.json';

const MyContext = createContext();

const ParentComponent = () => {
    return (
        <MyContext.Provider value={jdata}>
            <ChildComponent />
        </MyContext.Provider>
    );
};

const ChildComponent = () => {
    return <SubComponent />;
};

const SubComponent = () => {
    const persons = useContext(MyContext);

    return (
        <>
            {persons.map((person, key) => (
                <SubSubComponent key={key} name={person.name} />
            ))}
        </>
    );
};

const SubSubComponent = ({ name }) => {
    return <p>{name}</p>;
};

export default function UseContextHook() {
    return <ParentComponent />;
}
