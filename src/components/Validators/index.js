import ValidatorsItem from "./validatorsItem";
import ValidatorsRank from "./validatorsRank";
import ValModal from "./valModal";

const Validators = () => {
    return (
        <div className="container validators_bg">
            <ValidatorsItem />
            <ValidatorsRank />
            <ValModal />
        </div>
    )
}

export default Validators