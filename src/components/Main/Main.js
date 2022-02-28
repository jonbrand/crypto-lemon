import instagramLogo from '../../assets/owner/instagram.png';
import twitterLogo from '../../assets/owner/twitter.png';
import moreIcon from '../../assets/owner/more.png';

export const Main = () => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="lemonHighlight">
                    <div className="lemonContainer">
                        <img 
                            className="selectedLemon" 
                            src={'https://ipfs.thirdweb.com/ipfs/QmdJ83dEGFixifoXnzo4SuMKdgkSnqydW1N5igScgznQFo/0.png'} 
                            alt='imagem ativa'
                        />
                    </div>
                </div>
                <div className="lemonDetails" style={{color:'#fff'}}>
                    <div className="title">
                        Lemon Baby
                    </div>
                    <span className="itemNumber">#1</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img 
                            src={'https://ipfs.thirdweb.com/ipfs/QmdJ83dEGFixifoXnzo4SuMKdgkSnqydW1N5igScgznQFo/0.png'} 
                            alt='imagem escolhida' 
                        />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                            <div>0x8daa623f9F22586825149E48C4BE66105C7e9a9a</div>
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