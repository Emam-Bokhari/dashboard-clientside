import { useQuery } from "@tanstack/react-query";


const ManageProducts = () => {

    const data=useQuery({
        queryKey: ['products'],
        queryFn:async()=>{
            const productsData=await fetch("http://localhost:3000/product")
            return await productsData.json()
        }
    })
    console.log(data.data);
   

    return (
        <div>
            <h2>Manage Products component</h2>
        </div>
    );
};

export default ManageProducts;