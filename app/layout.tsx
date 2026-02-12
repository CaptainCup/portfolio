import type {Metadata} from 'next';
import {Geist, Geist_Mono, Pixelify_Sans} from 'next/font/google';
import './globals.css';

const pixelifySans = Pixelify_Sans();

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Илья Г. | Frontend Developer',
	description: 'Гаврилов Илья Юрьевич. Frontend Developer.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='run'>
			<body
				className={`${pixelifySans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
