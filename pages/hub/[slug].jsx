export function Test(props) {
    console.log(props);
    return JSON.stringify(props)
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {params: {slug: 'river'}},
        ],
        fallback: 'blocking',
    };
};


export function getStaticProps(context) {
    console.log(context);
    return {
        props: {slug: context.params.slug}
    };
}

export default Test;
