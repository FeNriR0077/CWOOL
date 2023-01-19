
const Productlist = ({item, itemIndex, oddeven}) => {


    return (
        <>
            <div className={`${oddeven ? "listitem" : "listitemtwo"}`}>
                
                <img className="productimage" src={item.url} alt={item.name} />
                

                <div className="nameanddesc">
                    <h2 className="listheading hover:underline hover:cursor-pointer">{item.name}</h2>
                    <h3 className="listdesc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus repellendus, quia aliquam nemo tempora ea nulla repellat ducimus consectetur molestiae modi accusamus eos. Laudantium, illo laboriosam quas consectetur neque mollitia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam voluptate voluptas nobis blanditiis ratione a aspernatur obcaecati, explicabo natus aliquam distinctio modi fugit veritatis accusantium labore, dicta quod tempore.
                    </h3>
                </div>
                
            </div>
        </>
    );
}
 
export default Productlist;