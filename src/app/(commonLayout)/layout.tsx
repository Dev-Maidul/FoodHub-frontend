import { Navbar1 } from "@/components/navbar1";

export default function commonLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
        <Navbar1></Navbar1>
      {children}
    </div>
  )
}
