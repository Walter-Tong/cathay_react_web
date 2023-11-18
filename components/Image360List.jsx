import Image360Item from "./Image360Item"

function Image360List() {
    const basePath = "../images/"

    const imgs = [
        "IMG_2543.jpeg",
        "IMG_2544.jpeg",
        "IMG_2546.jpeg",
        "IMG_2547.jpeg",
        "IMG_2548.jpeg",
        "IMG_2549.jpeg",
        "IMG_2550.jpeg",
        "IMG_2551.jpeg",
        "IMG_2553.jpeg",
        "IMG_2554.jpeg",
        "IMG_2555.jpeg",
        "IMG_2556.jpeg",
        "IMG_2557.jpeg",
        "IMG_2558.jpeg"
    ]

    const images =  imgs.map((i) => basePath + i).map((i, index) => <Image360Item path={i} key={index} />)



    return (
        <div>
            {images}
        </div>
    )
}

export default Image360List