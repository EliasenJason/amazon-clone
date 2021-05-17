import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {useState, useEffect} from 'react'

export default function HomeScreen() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
            setLoading(true)
            fetch('/api/products')
            .then(res => {
                if(res.status !== 200) {
                    setError(res)
                }
                return res.json()
            })
            .then(data => setProducts(data))
            .then(() => setLoading(false))
    },[])

    return (
        <div>
            {error ? <MessageBox variant="danger">{`Request Failed - ${error.statusText} / Status code ${error.status}`}</MessageBox>
            :
            loading ? <LoadingBox></LoadingBox>
            :
            <div className="row center">
                {products.map(product => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
            }
            
        </div>
        
        )
}