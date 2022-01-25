import { getJsonData } from '../utils/tool';
import CarouselComp from '../components/ui/carousel';
import Articles from '../components/home/articles';


const Home = ({ data }) => {
	return (
		<>
			<CarouselComp data={data.carrousel} />
			<Articles data={data.articles} />

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
