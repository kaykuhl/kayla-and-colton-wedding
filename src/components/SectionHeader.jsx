export const SectionHeader = (props) => {
    const myStyle = {
        padding: "16px",
        fontFamily: "Arial",
        width: "100%",
        marginBottom: '0px',
        background: '#22311d',
        color: 'white'
    };
    return (
        <>
        <h2 id={props.id} style={myStyle}>{props.title}</h2>
        <hr style={{margin: 'auto',marginTop: 0, paddingTop: 0}}/>
        </>
    );
}