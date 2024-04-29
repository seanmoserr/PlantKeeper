
const Plant = (uname, pname) => {
    return (
            <div className="indPlant">
                <input type="text" placeholder="Enter text..." style="display: block; margin-bottom: 10px;"/>
                <img src="https://via.placeholder.com/50x50" alt="Small Image" width="50" height="50"/>
            </div>
    )
}

class plant {
    species = "";
    name = "";

    constructor(new_spec, new_name){
        this.species = new_spec;
        this.name = new_name;
    }
}
export default Plant