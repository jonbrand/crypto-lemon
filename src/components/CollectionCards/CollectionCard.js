import weth from '../../assets/eth.png'
import './CollectionCard.css'

export const CollectionCards = ({ id, name, traits, image}) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt='' />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'>#{id}</div>
                </div>
                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt='ethereum' />
                    <div className='price'>{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}