import axios from "axios";

const AddProducts = () => {
    const handleAddProduct=(event)=>{
        event.preventDefault()
        const form=event.target 
        const productData={
            productName:form.productName.value||"Not Given Data",
            productPrice:form.productPrice.value||"Not Given Data",
            photoUrl:form.photoUrl.value||"Not Given Data",
            ratings:form.ratings.value||"Not Given Data",
            productDescription:form.productDescription.value||"Not Given Data"
        }
        form.reset()
        console.log(productData);
        axios.post("http://localhost:3000/product",productData)
        .then(res=>{
            console.log(res.data);
        })
    }
    return (
        <div>

            <div className="relative" >

                {/* image */}
                <div>
                    <img className="w-full" src="https://i.ibb.co/LpDtjCc/checkout.png" />
                </div>

                {/* overlay */}
                <div className="bg-gradient-to-r from-[#151515] to-[#15151500] rounded-md inset-0 absolute" ></div>

                <div className="absolute top-10 lg:top-28 text-white left-20 " >
                    <h2 className="text-3xl lg:text-4xl font-semibold" >Add Products</h2>
                </div>
            </div>

            {/* products form */}
            <form onSubmit={handleAddProduct} className="bg-[#F3F3F3] px-6 py-10 space-y-5 my-10 rounded-md" >

                <div>
                    {/* product name and  product price */}
                    <div className="flex gap-5" >
                        {/* product Name */}
                        <div className="flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="productName" placeholder="Product Name" required/>
                        </div>

                        {/* product Price */}
                        <div className=" flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="number" name="productPrice" placeholder="Product Price"  required/>
                        </div>
                    </div>
                </div>



                {/* image and rating */}
                <div>
                    <div className="flex gap-5" >
                        {/* image */}
                        <div className=" flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="text" name="photoUrl" placeholder="Photo URL"  required/>
                        </div>

                        {/* ratings */}
                        <div className="flex-1" >
                            <input className="p-2 rounded-md w-full outline-[#FF3811]" type="number" name="ratings" placeholder="Ratings"  required />
                        </div>
                    </div>
                </div>

                {/* product description */}
                <div>
                    <textarea className="w-full h-48 p-2 resize-none rounded-md outline-[#FF3811]" name="productDescription" placeholder="Product Description"  required></textarea>
                </div>

                <div>
                    <input className="bg-[#FF3811] w-full py-3 text-white font-semibold rounded-md cursor-pointer" type="submit" value="Add Product" />
                </div>

            </form>
        </div>
    );
};

export default AddProducts;