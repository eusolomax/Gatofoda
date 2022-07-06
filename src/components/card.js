import './card.css'
import teste from "../public/cardimages/image1.png"

export default function Card({ img, title, desc, value }) {
    return (
        <>
            <div className='background'>
                <img src="../public/cardimages/image1.png" />
            </div>
        </>
    )
}