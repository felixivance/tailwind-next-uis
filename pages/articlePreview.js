import Head from 'next/head';

function articlePreview() {
    return (
        <div className=" bg-gray-300 h-screen px-8 pt-8">
            <Head>
                <title>Article Preview Challenge</title>
            </Head>
            <div className="mx-auto">
                <img src="/images/drawers.jpeg" className="rounded-tr-md rounded-tl-md h-48 w-full" alt="" />
                <div className="bg-white p-8 rounded-bl-md rounded-br-md">
                    <h2 className="text-gray-700 font-semibold">Shift overall look and feel by adding these wonderful touches to furniture in your home</h2>
                    <p className="text-sm text-gray-600 mt-4"> Ever been in a room and felt like something was missing? perhaps it felt slightly bare 
                        and uninviting. iv got some simple tips to help you make room feel complete. </p>
                    <div className="flex items-center mt-4">
                        <div className="flex items-center">
                            <img src="/images/avatar-michelle.jpeg" className="h-10 w-10 rounded-full " alt="" />
                            <div className="ml-4">
                                <p className="text-gray-800 text-sm font-semibold">Michelle </p>
                                <p className="text-gray-600 text-sm">30 Sep 2021</p>
                            </div>
                        </div>
                        <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
                            <img src="/images/share.svg" className="" alt="" />
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default articlePreview
