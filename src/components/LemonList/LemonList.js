import { CollectionCards } from "../CollectionCards/CollectionCard"
import './LemonList.css';

export const LemonList = ({ lemonListData, setSelectedLemon }) => {
    console.log(lemonListData)
    return (
        <div className='lemonList'>
            {lemonListData.map(lemon => (
                <div onClick={() => setSelectedLemon(lemon.token_id)}>
                    <CollectionCards
                        key={lemon.token_id}
                        id={lemon.token_id}
                        name={lemon.name}
                        traits={lemon.traits}
                        image={lemon.image_url}
                    />
                </div>
            ))}
        </div>
    )
}