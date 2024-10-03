
export default function Product({ product }) {

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img src={product.image} alt="Girl in a jacket" width="300" height="300"/></td>
            <td>{product.rating.rate}</td>
        </tr>
    )
}