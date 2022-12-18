export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>supabase auth</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
