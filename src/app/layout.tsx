// This file is obsolete and has been replaced by src/app/[locale]/layout.tsx
// You can delete this file.
// Keeping it temporarily to avoid build errors if referenced, but it should be removed.
export default function RootLayout({children}: {children: React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
