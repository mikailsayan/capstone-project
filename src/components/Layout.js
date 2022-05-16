import Footer from './Footer/Footer';

export default function Layout({ children }) {
	return (
		<>
			<main>{children}</main>
			<Footer />
		</>
	);
}
