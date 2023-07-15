// CSS
import '../globals.scss';

// React
import type { Metadata } from 'next';

// Components
import { Navbar } from './w-components/navbar/navbar';
import { Sidebar } from './w-components/sidebar/sidebar';


export const metadata: Metadata = {
	title: 'ATS',
	description: 'Applicant Tracking System',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className='min-h-full h-full'>
			<body className='bg-neutral-100 min-h-full'>
				{/* <Navbar /> */}
				<Sidebar />
				<main className='ml-64 p-4'>
					{children}
				</main>
			</body>
		</html>
	)
}
