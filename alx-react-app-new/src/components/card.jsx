function Card(props) {
    

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <h4>{props.age>=20?"You are mature":"You are not mature"}</h4>
    </div>
)
}
export default Card