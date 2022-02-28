import { CollectionCards } from "../CollectionCards/CollectionCard"
import './LemonList.css';

export const LemonList = ({ lemonListData }) => {
    return (
        <div className='lemonList'>
            {lemonListData.map(lemon => (
                <div>
                    <CollectionCards
                        key={lemon.token_id}
                        id={lemon.token_id}
                        name={lemon.name}
                        traits={lemon.traits}
                        image={lemon.image_preview_url}
                    />
                </div>
            ))}
        </div>
    )
}