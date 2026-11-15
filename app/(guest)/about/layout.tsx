import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About page",
  description: "Our about page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      {children}
    </div>
  );
}