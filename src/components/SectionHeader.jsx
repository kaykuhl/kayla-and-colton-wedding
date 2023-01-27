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
        <h2 id={props.id} style={myStyle}>{props.title}</h2>
        <hr style={{margin: 'auto',marginTop: 0, paddingTop: 0}}/>
        </>
    );
}