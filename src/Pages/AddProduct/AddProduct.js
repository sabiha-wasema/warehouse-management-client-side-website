import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    };

    return (
        <div className="w-50 mx-auto show-item ">
            <h1 className="text-center">Restock the Product</h1>
            <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
                <input className="mb-3 px-2 border rounded" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <textarea className="mb-3 px-2 border rounded" placeholder="description" {...register("description")} />
                <input className="mb-3 px-2 border rounded" placeholder="price" type="number" {...register("price")} />
                <input className="mb-3 px-2 rounded border" placeholder="Photo URL" type="text" {...register("picture")} />
                <input className="mb-3 px-2 border rounded" placeholder="Quantity" type="number" {...register("quantity")} />
                <input className="mb-3 px-2 border rounded" placeholder="Supplier Name" type="text" {...register("supplier")} />
                <input type="submit" className="btn btn-dark" />
            </form>

        </div>
    );
};

export default AddProduct;