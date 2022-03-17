import './Main.css';
import { useEffect, useState } from 'react';
import instagramLogo from '../../assets/owner/instagram.png';
import twitterLogo from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';

export const Main = ({ selectedLemon, lemonListData}) => {
    const [activeLemon, setActiveLemon] = useState(lemonListData[0]);

    useEffect(() => {
        if (!selectedLemon) return
    
        setActiveLemon(
          lemonListData.find(lemon => lemon.token_id === selectedLemon)
        )
      }, [lemonListData, selectedLemon])
      
    return (
        <div className="main">
            <div className="mainContent">
                <div className="lemonHighlight">
                    <div className="lemonContainer">
                        <img 
                            className="selectedLemon" 
                            src={activeLemon.image_url} 
                            alt='imagem ativa'
                        />
                    </div>
                </div>
                <div className="lemonDetails" style={{color:'#fff'}}>
                    <div className="title">
                        {activeLemon.name}
                    </div>
                    <span className="itemNumber">#{activeLemon.token_id}</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img 
                            src={activeLemon.owner.profile_img_url} 
                            alt='imagem escolhida' 
                        />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>{activeLemon.owner.address}</div>
                            <div className="ownerHandle">@jonbrand</div>
                        </div>
                        <div className="ownerLink">
                            <img src={instagramLogo} alt='logo instagram' />
                        </div>
                        <div className="ownerLink">
                            <img src={twitterLogo} alt='logo twitter' />
                        </div>
                        <div className="ownerLink">
                            <img src={moreIcon} alt='mais opções' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}