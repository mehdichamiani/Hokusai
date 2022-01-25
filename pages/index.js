import { getJsonData } from '../utils/tool';
import CarouselComp from '../components/ui/carousel';

import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = ({ data }) => {
	console.log(data);
	return (
		<>
			<CarouselComp data={data.carrousel} />
		</>
	);
};

export const getStaticProps = async () => {
	const data = await getJsonData();

	return {
		props: {
			data,
		},
	};
};

export default Home;
