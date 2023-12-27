import React, {useState} from 'react'
import '../css/gallery.css'
import Layout from '../Components/Layout'
import ServicesGallery from '../Components/ServicesGallery'
import ServicesVideo from '../Components/ServicesVideo'

function Qalereya() {
    const [selectedButton, setSelectedButton] = useState('photo')
    const clickButton = (buttonType) => {
        setSelectedButton(buttonType);
    }
    return (
        <Layout>
            <section className='gallery-section bg-section'>
                <div className='btn-groups'>
                    <button className={`btn-gallery ${selectedButton === 'photo' ? 'btn-active' : ''}`} onClick={() => clickButton('photo')}>Foto</button>
                    <button className={`btn-gallery ${selectedButton === 'video' ? 'btn-active' : ''}`} onClick={() => clickButton('video')}>Video</button>
                </div>
                <ServicesGallery />
                {selectedButton === 'photo' && (
                    <div className='container'>
                    <div className='images-gallery row'>
                        <div className='img-gallery'>
                            <img src='/img/katarzyna-ostrowska-OBH6aYRPOuQ-unsplash 1.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/hassan-nizam-Y3Hbh7wB8CI-unsplash 1.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/bobby-stevenson-CMf6Soxi-Ao-unsplash 1.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/douglas-bagg-EmHeYdjEMKw-unsplash 1.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/linval-ebanks-3rF6lSO-Vwc-unsplash 2.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/shaah-shahidh-eG6C4nIvP0Y-unsplash 2.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/linval-ebanks-3rF6lSO-Vwc-unsplash 2.png'></img>
                        </div>
                        <div className='img-gallery'>
                            <img src='/img/shaah-shahidh-eG6C4nIvP0Y-unsplash 2.png'></img>
                        </div>
                    </div>
                </div>
                )}
                {
                    selectedButton==='video' && (
                        <ServicesVideo/>
                    )
                }
            </section>
        </Layout>
    )
}

export default Qalereya