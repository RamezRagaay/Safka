import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Rating = ({rate}) => {
	const stars = [];
	for (let i = 1; i <= 5; i++) {
		if (rate >= i) {
			stars.push(<IoIosStar className="text-yellow-500" key={i} />);
		}
		else if (rate >= i - 0.5) {
			stars.push(
				<IoIosStarHalf className={`text-yellow-500 scale-x-[-1]`} key={i} />
			);
		} 
		else {
			stars.push(<IoIosStarOutline className={`text-yellow-500`} key = {i} />);
		}
	}
	return stars;
};

export default Rating