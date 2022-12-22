export function HuaweiPage(props) {
    const {huaweiBuds} = props;
    return (
        <div>
            <h1>Huawei FreeBuds</h1>
            {huaweiBuds.map(p => <Picture key={p.id} picture={p} />)}
        </div>
    );
}

function Picture(props) {
    const { picture } = props;

    return <>
        <img src={`images/${picture.name}`}
             alt={picture.name}
             width="45%"
             style={{margin: "2vw auto 0 auto"}}/>
        by <a href={picture.credit}>{picture.author}</a>
    </>
}