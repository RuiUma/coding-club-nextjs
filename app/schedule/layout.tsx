import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Coding Club Schedule",
  description: "help coding for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        {children}
    </div>
  );
}
