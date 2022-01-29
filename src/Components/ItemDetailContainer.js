import BudinIngles from '../image/product/Budin ingles.jpeg';
import ItemCount from './ItemCount';

function ItemDetail({item}){
    return<> 
    <img src={BudinIngles} className="App-logo" alt="Budin Ingles" />
    <p>Budin Ingles</p>
    <p>$900</p>
    </>;}

export default ItemDetail;