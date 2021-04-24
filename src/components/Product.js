import React,{useContext} from 'react';
import Swal from 'sweetalert2'
import ProductContext from './context/ProductContext';
import withReactContent from 'sweetalert2-react-content';

const mySwal = withReactContent(Swal)

const Product = (props) => {
    const productContext = useContext(ProductContext)

    const { deleteProduct, setCurrent } = productContext;
    const { id , type, description, amount } = props.product;

    //delete a product
    const onDelete = (e) => {
        mySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete item!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                mySwal.fire(
                'Deleted!',
                'The item has been deleted',
                'success'
                )
            }
        })
    }
    // edit a product
   
    
    return (
        <tr className={(type === 'inc' ? 'bg-purple-300' : 'bg-pink-300') + ' bb-4 leading-8 p-2'}>
            <td className={'pl-2 ' + (type === 'inc' ? 'text-purple-700' : 'text-pink-700')}>
                {
                    type.charAt(0).toUpperCase() + type.slice(1)
                }
            </td>
            <td>{description}</td>
            <td className="text-center">{amount}</td>
            <td className="text-center">
                <ul className="flex ml-auto">
                    <li className="px-1 text-purple-700 mouse-hover" onClick={() => setCurrent(props.product)}><i className="fa fa-edit"></i></li>
                    <li className="px-1 text-pink-700 mouse-hover" onClick={onDelete}><i className="fa fa-trash"></i></li>
                </ul>
            </td>
        </tr>
    )
}

export default Product
