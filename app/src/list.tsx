export function List(props) {
    const numbers = props.numbers;

    // const list_items = numbers.map((n) => <li key={n.toString()}>{n}</li>);
    const list_items = numbers.map((n) => <li>{n}</li>);
    return <ul>{list_items}</ul>;
}
