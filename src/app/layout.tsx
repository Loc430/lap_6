import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
