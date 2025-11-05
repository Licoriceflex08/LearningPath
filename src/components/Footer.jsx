// src/components/Footer.jsx
export function Footer() {
  return (
    <footer className="w-full py-6 mt-12 bg-background border-t">
      <div className="container mx-auto flex flex-col items-center justify-center text-center text-sm text-muted-foreground">
        <span>
          &copy; {new Date().getFullYear()} CareerAtlas. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
