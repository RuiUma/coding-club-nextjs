import Header from "@/components/Header";

const HomeLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
	return (
		<div>
            <Header />
			<h1>Home layout</h1>
            {children}
		</div>
    )

}

export default HomeLayout