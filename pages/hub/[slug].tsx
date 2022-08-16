export function Test(props) {
    console.log('page component', props);
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
    console.log('getStaticProps', context);
    return {
        props: {slug: context.params.slug},
        revalidate: 30,
    };
}

export default Test;
