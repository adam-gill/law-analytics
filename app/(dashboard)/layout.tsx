import NavBar from "@/components/NavBar";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />

      {children}
    </div>
  );
};

export default dashboardLayout;
