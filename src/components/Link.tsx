import { ReactElement } from 'react';

const amUrl = "https://music.apple.com/us/album/"
const bcUrl = "https://lcrt.bandcamp.com/"
const sfUrl = "https://open.spotify.com/album/"
const scUrl = "https://soundcloud.com/lcrt/"

type LinkProps = {
  
  appleL: string,
  spotiL: string,
  bandcL: string,
  soundL: string,
}

export const Link = ({
  appleL,
  spotiL,
  bandcL,
  soundL,

}: LinkProps) => {
  return (
    <div className="flex flex-row place-items-center mx-auto gap-2">

      {bandcL ? <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto ">
        <a href={`${bcUrl}${bandcL}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="45" height="45" fill="#E1D9E2" >
            <path d="M15,3C8.373,3,3,8.373,3,15s5.373,12,12,12s12-5.373,12-12S21.627,3,15,3z M17.333,18.774H8.578l4.089-7.547h8.755L17.333,18.774z" fillRule="evenodd" clipRule="evenodd" /></svg>
        </a>
      </button> : ""}

      {appleL ? <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto ">
        <a href={`${amUrl}${appleL}`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 50 50 " fill="#E1D9E2">
            <path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
          </svg>
        </a>
      </button> : ""}

      {spotiL ? <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto ">
        <a href={`${sfUrl}${spotiL}`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="38" height="38" viewBox="0 0 50 50 " fill="#E1D9E2">
            <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z"></path>
          </svg>
        </a>
      </button> : ""}

      {soundL ? <button className="btn btn-md btn-ghost place-content-center bg-transparent btn-circle my-auto ">
        <a href={`${scUrl}${soundL}`}>
          <svg viewBox="0 0 24 24"
            fill='#E1D9E2'
            xmlns="http://www.w3.org/2000/svg"
            width="40" height="40">
            <path d="M20.66,10.71a3.31,3.31,0,0,0-.68.07,5.46,5.46,0,0,0-5.38-4.4,5.56,5.56,0,0,0-2,.37.83.83,0,0,0-.6.8v9a.83.83,0,0,0,.8.83h7.85a3.33,3.33,0,0,0,0-6.66Z" />
            <path d="M9.74,7.11A.75.75,0,0,0,9,7.86v9a.75.75,0,0,0,1.5,0v-9A.75.75,0,0,0,9.74,7.11Z" />
            <path d="M6.75,8.61A.75.75,0,0,0,6,9.36v7.51a.75.75,0,0,0,1.5,0V9.36A.75.75,0,0,0,6.75,8.61Z" />
            <path d="M3.75,10.61a.75.75,0,0,0-.75.75v5.51a.75.75,0,0,0,1.5,0V11.36A.75.75,0,0,0,3.75,10.61Z" />
            <path d="M.76,11.61a.75.75,0,0,0-.75.75v4a.75.75,0,0,0,1.5,0v-4A.75.75,0,0,0,.76,11.61Z" />
          </svg>
        </a>
      </button> : ""}

    </div>
  );
};