
import Frequent1 from "./Frequent";
import Limited from "./Limited";
import Pendings from "./Pending";
import Pichart from "./Piechart";
import Team from "./Team";
import Allproducts from "./allproducts";



const Homeforadmin = () => {
    return (
        <div>
            <Pendings></Pendings>
            <Frequent1></Frequent1>
            <Limited></Limited>
            <Pichart></Pichart>
            <Allproducts></Allproducts>
            <Team></Team>
            
        </div>
    );
};

export default Homeforadmin;