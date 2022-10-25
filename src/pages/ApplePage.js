export function ApplePage(props) {
    const {airpods} = props;
    return (
        <div>
            <h1>Apple Airpods</h1>
            {airpods.map(p => <Picture key={p.id} picture={p} />)}
        </div>
    );
}

function Picture(props) {
    const { picture } = props;

    return <>
        <img src={`images/${picture.name}`}
             alt={picture.name}
             width="100%"
             style={{margin: "2vw auto 0 auto"}}/>
        by <a href={picture.credit}>{picture.author}</a>
    </>
}