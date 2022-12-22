export function SamsungPage(props) {
    const {galaxyBuds} = props;
    return (
        <div>
            <h1>Galaxy Buds</h1>
            {galaxyBuds.map(p => <Picture key={p.id} picture={p} />)}
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