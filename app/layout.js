import "./globals.css";

export const metadata = {
  title: "Focus Faces Chicago",
  description:
    "Visual stoytelling Chicago + AI-agent. Professional help in managing your online presence.",
  keywords:
    "focus faces, business, Chicago, visual, ai, ai-agent, startup, online, social media, marketing, photography, branding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
