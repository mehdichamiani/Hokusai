import Head from 'next/head';
import Header from '../navigation/header';

const LayoutMain = (props) => {
	return (
		<>
			<Head>
				<title>Hokusai Tribute</title>
				<meta name='viewport' content='initial-scale=1.0,width=device-width' />
				<meta
					name='description'
					content='This is a tribute page in honor of Hokusai'
				/>
				<meta name='keyboards' content='Hokusai, art, paint' />
				<meta name='author' content='Francis' />
			</Head>
			<Header />

			<div className='container'>{props.children}</div>
		</>
	);
};

export default LayoutMain;
