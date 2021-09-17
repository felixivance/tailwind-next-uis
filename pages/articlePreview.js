import Head from 'next/head';

function articlePreview() {
    return (
        <div className="px-8 mt-8">
            <Head>
                <title>Article Preview Challenge</title>
            </Head>
            <div className="mx-auto">
                <img src="/images/drawers.jpeg" className="rounded-tr-md rounded-tl-md h-48 w-full" alt="" />
                <div className="bg-white p-8 rounded-bl-md rounded-br-md">
                    <h2>Shift overall look and feel by adding these wonderful touches to furniture in your home</h2>
                </div>
            </div>
        </div>
    )
}

export default articlePreview
