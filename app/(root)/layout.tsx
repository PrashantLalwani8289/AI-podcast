import LeftSidebar from "@/components/LeftSidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <main>
            <LeftSidebar></LeftSidebar>
            {children}
            <p>Right Sidebar</p>
        </main>
    </div>
  );
}
