export function Test(props) {
    return JSON.stringify(props)
}

export function getStaticProps(context) {
    return {
        props: {a: 1}
    };
}

export default Test;
