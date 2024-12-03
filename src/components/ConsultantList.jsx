import ConsultantPerson from "./ConsultantPerson"


const ConsultantList = (props) => {
    return (
        <div>
        {props.data.map((consultant, index) => (
            <ConsultantPerson 
            key={index} 
            data={consultant} 
            />
        ))}
        </div>
    );
};

export default ConsultantList;