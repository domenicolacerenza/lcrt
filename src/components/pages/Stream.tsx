import { MusicCard } from "@/components/MusicCard";

const Stream = () => {

    return (
        <>

           {/* <div className=" flex flex-col items-center justify-center md-my-62 mx-32 -mb-4">
                <h1 className="relative flex text-center text-blue-200 font-bold md:text-6xl text-3xl md:-mb-8 -mt-6">DEEP DIVE ⎋ PLAYLIST</h1>
                <img loading="lazy" width={300} src="/img/deepflag.gif" /> 
                <h1 className="relative flex text-center text-blue-200 font-bold md:text-6xl text-2xl md:-mt-10">Waveform ◎ Refracted</h1>
                <div className="flex flex-row gap-20 place-items-center md:-my-4 m-2">
                    <button className="btn btn-md btn-ghost bg-transparent btn-circle">
                        <a href={"https://music.apple.com/it/playlist/deep-dive/pl.u-aeDZczXmAxg?l=en-GB"}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50 " fill="#E1D9E2">
                                <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
                            </svg>
                        </a>
                    </button>
                    <button className="btn btn-md btn-ghost bg-transparent btn-circle">
                        <a href={"https://open.spotify.com/playlist/6MONuAr7qBCOiJq64OWwSM?si=1a01998c49ee4eb5"}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50 " fill="#E1D9E2">
                                <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
                            </svg>
                        </a>
                    </button>
                </div>
    </div> */}

            <MusicCard title={"Undefined Landscapes"} subtitle={"EP - 31/05/2024"} imgSrc="/img/cover/ulep.jpg"
                appleL="1744414032"
                spotiL="4kU060X2xB1YVLNWKUHuP0"
                bandcL="album/undefined-landscapes"
                soundL="sets/undefined-landscapes"
            />
            <MusicCard title={"Mida"} subtitle={"Single - 17/05/2024"} imgSrc="/img/cover/mida.jpg"
                appleL="1744570531"
                spotiL="3ItY4g99iZrgBIqBpiLmkX"
                bandcL="album/mida"
                soundL="track/mida"
            />
            <MusicCard title={"Undefined Landscapes"} subtitle={"Single - 19/04/2024"} imgSrc="/img/cover/ul.jpg"
                appleL="1740904572"
                spotiL="3LYu4RQuaASlFDJIeLEvBD"
                bandcL="track/undefined-landscapes"
                soundL="undefined-landscape"
            />
            <MusicCard title={"dirty"} subtitle={"Single - 27/10/2023"} imgSrc="/img/cover/dirty.jpg"
                appleL="1713022032"
                spotiL="3GElbDOVRBT4FszU9ylKpe"
                bandcL="album/dirty"
                soundL="sets/dirty"
            />
            <MusicCard title={"MULTIBAND DREAM-FUSION"} subtitle={"20/06/2023"} imgSrc="/img/cover/mdf.jpg"
                appleL="" spotiL=""
                bandcL="track/multiband-dream-fusion"
                soundL="multiband-dreamfusion"
            />
            <MusicCard title={"(LOOK AT U) ✧⎋"} subtitle={"23/06/2023"} imgSrc="/img/cover/lau.jpg"
                appleL="" spotiL=""
                bandcL="track/look-at-u"
                soundL="look-at-u"
            />
            <MusicCard title={"messy love"} subtitle={"Single - 09/06/2023"} imgSrc="/img/cover/ml.jpg"
                appleL="1690865943"
                spotiL="7mRefub1LqNiUZCQ8WCtxu"
                bandcL="track/messy-love"
                soundL="messylove"
            />
            <MusicCard title={"Al Chiar Di Luna (HOWL)"} subtitle={"Single - 26/03/2023"} imgSrc="/img/cover/howl.jpg"
                appleL="1688374356"
                spotiL="5gRiVXegJtfSPqWLKu5hQw"
                bandcL="track/al-chiar-di-luna-howl"
                soundL="howl"
            />
            <MusicCard title={"DESTINO"} subtitle={"Single - 06/10/2022"} imgSrc="/img/cover/dtn.jpg"
                appleL="1685015996"
                spotiL="1n7NzUBDfyngN4rGhFwJwK"
                bandcL="track/destino"
                soundL="destino"
            />
            <MusicCard title={"Fuck U 2"} subtitle={"Single - 06/09/2020"} imgSrc="/img/cover/fu2.jpg"
                appleL="1685027558"
                spotiL="2x4tUPhjloWD1i5lJEA7Gc"
                bandcL="track/fuck-u-2"
                soundL="fuck-u-2"
            />
            <MusicCard title={"untitled folder.zip"} subtitle={"EP - 27/09/2019"} imgSrc="/img/cover/ufep.jpg"
                bandcL="album/untiled-folder-zip"
                soundL={"sets/untitled-folderzip"} appleL={""} spotiL={""}
            />
            <MusicCard title={"Battle"} subtitle={"Single - 01/02/2019"} imgSrc="/img/cover/btl.jpg"
                bandcL="track/battle"
                soundL={"battle"} appleL={""} spotiL={""}
            />
        </>
    )
}
export default Stream;
