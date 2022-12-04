export const SectionHeader = (props) => {
    const myStyle = {
        padding: "16px",
        fontFamily: "Arial",
        margin: 0,
        paddingBottom: 0,
        width: "100%"      
    };
    return (
        <>
        <h1 id={props.id} style={myStyle}>{props.title}</h1>
        <hr style={{marginTop: 0, paddingTop: 0}}/>
        </>
    );
}