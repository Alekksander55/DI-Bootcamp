import myJson2 from '../myJson2.json'

const Example3 = (props) => {
    return (
        <>
        {myJson2.Experiences.map((item, index)=>{
            return (
            <div key={index}>
            <img src={`${item.logo}`}/> &nbsp; <br></br>
            <a href={`${item.url}`}>{item.companyName}</a>&nbsp;
            <>{item.roles.map((item, index)=>{
                return(
                    <div key={index}>
                    <h4>{item.title}</h4>&nbsp;
                    <p>{item.startDate}{item.location}</p>&nbsp;
                    <p>{item.description}</p>&nbsp;
                    </div>
                )
            })}</>

            </div>
        )})}
        </>
    )
}

export default Example3