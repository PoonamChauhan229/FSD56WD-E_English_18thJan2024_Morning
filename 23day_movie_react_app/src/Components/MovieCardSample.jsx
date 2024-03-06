import { Counter } from "./Counter"

export const MovieCard=()=>{
    return(
        <>
        <div className="movieContainer">
            <img src="https://c.ndtvimg.com/2023-01/0upombeg_ajay-devgn-_625x300_21_January_23.jpg?im=Resize=(1230,900)" alt="" className="moviePoster"/>

            <div className="movieSpecs">
                <h4 className="movieName">MovieName</h4>
                <button>ShowSummary</button>
                <h4 className="movieRating">rating</h4>
            </div>    
                <p className="movieSummary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum suscipit accusamus in cum rem a possimus qui officiis placeat veritatis natus maiores corporis unde consectetur, libero nisi velit iste molestiae ad expedita temporibus nesciunt. Eligendi iure nam corporis veritatis? Distinctio repellendus aliquid voluptate delectus consequatur tempora quisquam a quae magni hic eum nulla voluptas amet sunt deserunt enim ratione, similique quam obcaecati neque dolores. Facilis expedita beatae vitae hic quia reiciendis ad! Quidem soluta inventore atque impedit, voluptatem hic iste officiis velit commodi temporibus saepe doloribus deleniti repellat id, nemo voluptatibus odit facilis perferendis laboriosam qui quia rerum veritatis natus architecto? Animi recusandae ex assumenda eos modi totam architecto aspernatur, perspiciatis dignissimos ipsum excepturi aliquid tempora similique ratione tenetur. Itaque doloribus dolorem repudiandae, ex iusto nobis maiores sint? Ab aperiam doloribus vel. Laboriosam consectetur at aperiam recusandae exercitationem sed quisquam ad enim iure ut nostrum mollitia laborum autem, ullam, provident voluptatibus animi. Molestiae magni quis autem perferendis dolorum praesentium rerum veritatis necessitatibus odio, consequuntur dolore, hic tempore! Voluptates veniam commodi odio dolorem perferendis unde ipsum, quidem, voluptatibus asperiores qui quis corrupti dolores excepturi obcaecati voluptatem eum fugiat, est quod sunt. Cum facere molestias aspernatur. Optio enim nulla sint quo.</p>
                
                    {/* Like  Dilike button */}
                {/* <button>Like</button>
                <button>Dislike</button> */}

                <Counter/>
               
           

        </div>
        </>
    )
}